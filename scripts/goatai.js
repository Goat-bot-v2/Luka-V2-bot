const axios = require('axios');

const Prefixes = [
  'gta'
];

module.exports = {
  config: {
    name: "Goatai",
    version: "1.0",
    author: "Aesther",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      const bodyLower = event.body.toLowerCase();
      const prefix = Prefixes.find((p) => bodyLower.startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }

      const rolePlay = "As an AI language model, I see that you have provided a detailed structure and guidelines for creating commands for GoatBot V2. Here is a new command structure for GoatBot V2 that handles a specific user query:\n\n```javascript\nconst axios = require('axios');\nconst fs = require('fs');\n\nmodule.exports = {\n  config: {\n    name: \"newCommand\",\n    aliases: [\"nc\"],\n    version: \"1.0.0\",\n    author: \"GoatAi\", // © command created by GoatAi\n    countDown: 0,\n    role: 0,\n    shortDescription: {\n      en: \"Description of the new command in English\",\n      vi: \"Description of the new command in Vietnamese\"\n    },\n    longDescription: {\n      en: \"Long description of the new command in English\",\n      vi: \"Long description of the new command in Vietnamese\"\n    },\n    category: \"Custom\",\n    guide: {\n      en: \"Guide for using the new command in English\",\n      vi: \"Guide for using the new command in Vietnamese\"\n    }\n  },\n\n  onStart: async function({ message, args, api, usersData, threadsData }) {\n    // Add code here based on the user query and requirements to make the command work\n    // Use the provided parameters like message, args, api, usersData, threadsData\n\n    // Example code:\n    const userData = await usersData.get(message.senderID);\n    const userName = userData ? userData.name : \"Anonymous User\";\n\n    // Your specific command logic goes here\n\n    // End of code\n\n    // You can send a reply back to the user if needed\n    api.sendMessage(`Hello, ${userName}! This is a response from the new command.`);\n  }\n};\n```\n";
      const prompt = event.body.substring(prefix.length).trim();
      if (!prompt) {
        await message.reply("");
        api.sendMessage({ sticker: "387545578037993" }, event.threadID);
        api.sendMessage(" Hello ⁉️", event.threadID);
        api.setMessageReaction("❓", event.messageID, () => {}, true);
        return;
      }

      const senderID = event.senderID;
      const senderInfo = await api.getUserInfo(senderID);
      const senderName = senderInfo[senderID].name;

      const response = await axios.get(`https://c-v1.onrender.com/api/bard?prompt=${encodeURIComponent(rolePlay + prompt)}&id=${encodeURIComponent(senderName)}`);
      const answer = response.data.answer;

      api.sendMessage(answer, event.threadID);
      api.setMessageReaction("🐔", event.messageID, () => {}, true);

    } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
