const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function sendMsgToOpenAI(message) {
  try {
    const response = await openai.chat.completions.create({
      engine: "text-davinci-003",
      prompt: message,
      temperature: 0.7,
      maxTokens: 256,
      topP: 1,
      frequencyPenalty: 0,
      presencePenalty: 0,
    });
    return response.data.choices[0].text;
  } catch (error) {
    console.error("Error while sending message to OpenAI:", error);
    throw error;
  }
}
