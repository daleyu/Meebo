import { useState } from "react";
import { sendMessageToChatGPT } from "../pages/api/chatGPTAPI";

function ChatWindow() {
  const [messages, setMessages] = useState<
    Array<{ message: string; sender: string }>
  >([]);
  const [inputValue, setInputValue] = useState("");
  const API_KEY = process.env.api_key;

  const handleMessageSend = async (message: string) => {
    const response = await sendMessageToChatGPT(message);

    setMessages((prevMessages) => [
      ...prevMessages,
      { message, sender: "user" },
      { message: response, sender: "chatbot" },
    ]);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleMessageSend(inputValue);
      setInputValue("");
    }
  };
  return (
    <div>
      <ul>
        {messages.map((messageObj, index) => (
          <p key={index} className={messageObj.sender}>
            {messageObj.message}
          </p>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Type your message here"
        value={inputValue}
        onChange={handleInputChange}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
}

export default ChatWindow;
