const axios = require('axios');module.exports = {  config: {    name: 'Hercai',    version: '1.0',    author: 'Openai',    role: 0,    category: 'Ai-Chat',    shortDescription: { en: `ChatGPT is a large language \n| model trained by OpenAI. It is designed \n| to be able to assist with wide range of \n| tasks.` },    longDescription: { en: `ChatGPT is a large language \n| model trained by OpenAI. It is designed \n| to be able to assist with wide range of \n| tasks.` },    guide: { en: '{pn}Herc.ai [query]' },  },  onStart: async function ({ api, event }) {    try {      const query = args.join(" ");      if (query) {        const processingMessage = await api.sendMessage(`Asking ChatGPT. Please wait a moment...`, event.threadID);        const response = await axios.get(`https://lianeapi.onrender.com/@hercai/api/Herc.ai?query=${encodeURIComponent(query)}`);                if (response.data && response.data.message) {          await api.sendMessage({ body: response.data.message.trim() }, event.threadID, event.messageID);          console.log(`Sent ChatGPT's response to the user`);        } else {          throw new Error(`Invalid or missing response from ChatGPT API`);        }        await api.unsendMessage(processingMessage.messageID);      }    } catch (error) {      console.error(`❌ | Failed to get ChatGPT's response: ${error.message}`);      api.sendMessage(`❌ | An error occured. You can try typing your query again or resending it. There might be an issue with the server that's causing the problem, and it might resolve on retrying.`, event.threadID);    }  },};
