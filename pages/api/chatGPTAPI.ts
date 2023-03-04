const apiKey: string | undefined = process.env.api_key;

const sendMessageToChatGPT = async (message: string): Promise<string> => {
  const response = await fetch(
    "https://api.openai.com/v1/engines/davinci-codex/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        prompt: `The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.
      User: ${message}
      AI:`,
        max_tokens: 50,
        temperature: 0,
      }),
    }
  );

  const jsonResponse = await response.json();
  const { choices } = jsonResponse;
  if (!choices || choices.length === 0) {
    return "Sorry, I didn't understand that.";
  }
  const [{ text }] = choices;

  return text;
};

export { sendMessageToChatGPT };
