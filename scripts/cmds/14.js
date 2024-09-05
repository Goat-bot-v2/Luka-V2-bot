const Prefixes = [
  '11',
  '14',
  '13',
];

module.exports = {
  config: {
    name: "14",
    version: "1",
    author: "aesther",
    longDescription: "Command with no prefix\n💬 - LLaMA, a large language model developed by Meta AI that can understand and respond to human input in a conversational manner. I'm a type of artificial intelligence designed to generate human-like text responses.",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {
    // Initialization logic here if needed
  },
  onChat: async function ({ api, event, args, message }) {
    try {
      // Check if the message starts with a valid prefix
      const prefix = Prefixes.find((p) => event.body && event.body.trim().toLowerCase().startsWith(p.toLowerCase()));
      if (!prefix) {
        return; // Ignore the command if prefix is not recognized
      }

      // Extract the question from the message
      const prompt = event.body.substring(prefix.length).trim();
      const senderID = event.senderID;
      const senderInfo = await api.getUserInfo(senderID); // Use senderID directly
      const senderName = senderInfo[senderID].name; 

      if (!prompt) {
        await message.reply(`🌹 𝐋𝐮𝐤𝐚 𝐛𝐨𝐭 🌹:\n\n ✰ 𝐒𝐚𝐥𝐮𝐭 ${senderName} 𝐜𝐨𝐦𝐦𝐞𝐧𝐭 𝐩𝐮𝐢𝐬-𝐣𝐞 𝐭'𝐚𝐢𝐝𝐞𝐫 !✰`);
        api.setMessageReaction("🐔", event.messageID, () => {}, true);
        return;
      }

      / Make a GET request to the AI API
      const response = await axios.get(`https://c-v1.onrender.com/api/bard?prompt={encodeURIComponent(prompt)}`)
      const answer = response.data.answer;

      await message.reply(`🌹 𝐋𝐮𝐤𝐚 𝐛𝐨𝐭 🌹 :\n[💘] ${senderName}\n\n${answer} 🩷`);
      api.setMessageReaction("✨", event.messageID, () => {}, true);

    } catch (error) {
      console.error("Error:", error.message);
      await message.reply("Sorry, I couldn't process your question at the moment.");
    }
  }
};
