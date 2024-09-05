module.exports = {
  config: {
    name: "hvd",
    aliases: ["hvdo"],
    version: "1.0",
    author: "Rajveer",
    countDown: 60,
    role: 2,
    shortDescription: "get hentai video",
    longDescription: "it will send hentai  video",
    category: "anime",
    guide: "{p}hvd",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "Loading random hentai... Please wait! upto 5min 🤡",
    });

    const link = [
        "https://drive.google.com/uc?export=download&id=1ywjcqK_AkWyxnRXjoB0JKLdChZsR69cK",
        "https://drive.google.com/uc?export=download&id=1xyC3bJWlmZVMoWJHYRLdX_dNibPVBDIV",
        "https://drive.google.com/uc?export=download&id=1whpsUv4Xzt3bp-QSlx03cLdwW2UsnEt2",
        "https://drive.google.com/uc?export=download&id=1wUaET9wLXH4vVBF3ilxOWybxPiqp2gEs",
        "https://drive.google.com/uc?export=download&id=1w3Q3OgnemXiN05bdE8oReOPcQOW55SAF",
        "https://drive.google.com/uc?export=download&id=1vDfJtp77RyAyOWOQrimZEYX_Ah6Xkz2t",
        "https://drive.google.com/uc?export=download&id=1uGrrFh79_5yPN3GPWd1mA4MtIy6C08y-",
        "https://drive.google.com/uc?export=download&id=1tN2WYhRs7Cbq7KbN0MWUlhZGaKUHj_6y",
        "https://drive.google.com/uc?export=download&id=1syg8E-nP9HAYIjY-MAIQEALKkY39A4a4",
        "https://drive.google.com/uc?export=download&id=1sDRmcDv_LGTPwITrSn7N454AtZ8V_NgN",
        "https://drive.google.com/uc?export=download&id=1ri-l4Qk4tf73KVAMdiXxy-yVF0JNqdS7",
        "https://drive.google.com/uc?export=download&id=1rcsGmKWNdN0hCKiX88QNBSXEU8VvaQAo",
        "https://drive.google.com/uc?export=download&id=1rZJ8y_5kLKAJfMMIc9z-_4E9n3pm0GsO",
        "https://drive.google.com/uc?export=download&id=1rTf61vUJJGw7-_3yw0QzS7ZrGMdmbuWA",
        "https://drive.google.com/uc?export=download&id=1rNMJgoHOsBH_luODo-VHfdb_ZkAuc5Az",
        "https://drive.google.com/uc?export=download&id=1qy4cU5WRWVfYZPPncGEQ8cFXacCVZ15u",
        "https://drive.google.com/uc?export=download&id=1qrtf0Cp5gDGXWqxLjdEB2x1lUammXMUl",
        "https://drive.google.com/uc?export=download&id=1pz_fkQjHKx9BUmZWZPm05KRMaDTPEV9k",
        "https://drive.google.com/uc?export=download&id=1pw3B0kR3XQ9roy0Jj7EpNBoMOlHtK8qX",
        "https://drive.google.com/uc?export=download&id=1psBrXCWoFVexjbDDVJR1OYoXadFFRqam",
        "https://drive.google.com/uc?export=download&id=1ortx_MWQXEN1iYUXhJJow-uHcXlnK28e",
        "https://drive.google.com/uc?export=download&id=1nO5ojZ_oGkXGv_Pl9bPHz7CUwpYSDGCN",
        "https://drive.google.com/uc?export=download&id=1lSZ078rtW7a6aMNTlaBC9jXFb1I8jRYC",
        "https://drive.google.com/uc?export=download&id=1lM8v68ICcprxePiGdjsbwPjfrqzRvZ6y",
        "https://drive.google.com/uc?export=download&id=1lHQv7iSNAdgF769n8Ur7cIz5JHjER1DB",
        "https://drive.google.com/uc?export=download&id=1lDwJOwZfveRqOomhZe6Wb3RJ1vW08uTv",
        "https://drive.google.com/uc?export=download&id=1l2ewdfVNAoQ2KYPPqjYOEEhW17PwYUF2",
        "https://drive.google.com/uc?export=download&id=1kedvq0VECKWpw1nEU-VWtO_VkoIhbOuI",
        "https://drive.google.com/uc?export=download&id=1kByndSenNowuek8een-4pDjSKnoIEwlJ",
        "https://drive.google.com/uc?export=download&id=1jpciEk9NXG_eIKnN0ltd3fjLUVh9nI2I",
        "https://drive.google.com/uc?export=download&id=1ipQqL_rLIhiSatSnoWHwhaS-UWuC1Vq6",
        "https://drive.google.com/uc?export=download&id=1iNiBBs7yGlPdEGJtRuHVnt_cte3lWUQ4",
        "https://drive.google.com/uc?export=download&id=1iAVp7tMolOu7m5LldenbGJN5uEzqo9G3",
        "https://drive.google.com/uc?export=download&id=1hZOD6-n8tDjne1tLaFaoVGgqUYTytkPI",
        "https://drive.google.com/uc?export=download&id=1hBGpE-mgCbFe8WuWxw0BBlzRuwsVIh24",
        "https://drive.google.com/uc?export=download&id=1h1KzxAkbiHSpP1c_XUkPXm4kOzXkLETJ",
        "https://drive.google.com/uc?export=download&id=1f_64vga6i4-hEVcE9cdZnIqC-VOgUjzs",
        "https://drive.google.com/uc?export=download&id=1ew_vEjjxHcrukG5T9T7gKdKl6feDrj4V",
        "https://drive.google.com/uc?export=download&id=1emeDbEjIV58KgGC783Gz9T_xqbTkpDr_",
        "https://drive.google.com/uc?export=download&id=1eDwS_7xg0kFNi9xMKjYEs5pZPTKQ6-5M",
        "https://drive.google.com/uc?export=download&id=1ctctkv5L_-XehYSXDrtRpaWBkDQ8G94w",
        "https://drive.google.com/uc?export=download&id=1cnXVJM_E57-z5MeoiUiaq6KmGj0nOD4_",
        "https://drive.google.com/uc?export=download&id=1cdqo21j1WK5ssROfVtgMmqtDiQ2PQR5c",
        "https://drive.google.com/uc?export=download&id=1bw3xD_KosEQKxONZHJIy9R5X-IYUsHeV",
        "https://drive.google.com/uc?export=download&id=1bJKLVy10G0idoLWD23VDguIMRonY4Trn",
        "https://drive.google.com/uc?export=download&id=1b7zxHpinRVVPBiUww4Ei0Xr4ayo-9jJd",
        "https://drive.google.com/uc?export=download&id=1b6HQ7mOwUjCmT6_2B8-q34bTN9cCil6P",
        "https://drive.google.com/uc?export=download&id=1aogVwyNI2G6FZ14BDT--F32tCY3FRx28"]

let video = link[Math.floor(Math.random()*link.length)]
message.send({
  body: ' unholy-🌚',attachment: await global.utils.getStreamFromURL(video)
})
}
     }
