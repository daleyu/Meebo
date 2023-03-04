// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prompt = req.query.prompt;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt missing" });
  }

  if (prompt.length > 100) {
    return res.status(400).json({ error: "Prompt too long" });
  }

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Create a cringy motivational quote based on the following topic.\n
    Topic: ${prompt}\n
    Cringy motivational quote:`,
    max_tokens: 500,
    temperature: 1,
    presence_penalty: 0,
    frequency_penalty: 0,
  });

  const quote = completion.data.choices[0].text;

  res.status(200).json({ quote });
}
// const apiKey: string | undefined = process.env.api_key;

// const sendMessageToChatGPT = async (message: string): Promise<string> => {
//   const response = await fetch(
//     "https://api.openai.com/v1/engines/davinci-codex/completions",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${apiKey}`,
//       },
//       body: JSON.stringify({
//         prompt: `The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.
//       User: ${message}
//       AI:`,
//         max_tokens: 50,
//         temperature: 0,
//       }),
//     }
//   );

//   const jsonResponse = await response.json();
//   console.log(jsonResponse);
//   const { choices } = jsonResponse;
//   if (!choices || choices.length === 0) {
//     return "Sorry, I didn't understand that.";
//   }
//   const [{ text }] = choices;

//   return text;
// };

// export { sendMessageToChatGPT };
