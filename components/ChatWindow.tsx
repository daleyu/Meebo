// //CODE FROM CHAT-GPT FOr MEssaging only

import { useState } from "react";
import { sendMessageToChatGPT } from "./chatGPTAPI";

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const API_KEY = process.env.REACT_APP_CHATGPT_API_KEY;

  const handleMessageSend = async (message) => {
    const response = await sendMessageToChatGPT(message, API_KEY);

    setMessages([
      ...messages,
      { message, sender: "user" },
      { message: response, sender: "chatbot" },
    ]);
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
        onKeyUp={(e) => {
          if (e.key === "Enter") handleMessageSend(e.target.value);
        }}
      />
    </div>
  );
}

export default ChatWindow;

// import { useState, useEffect } from "react";
// import { sendMessageToChatGPT } from "./chatGPTAPI";

// function ChatWindow() {
//   const [messages, setMessages] = useState([]);
//   const [isListening, setIsListening] = useState(false);
//   const [transcript, setTranscript] = useState("");
//   const API_KEY = process.env.REACT_APP_CHATGPT_API_KEY;

//   useEffect(() => {
//     if (isListening) {
//       const recognition = new window.webkitSpeechRecognition();
//       recognition.onresult = (event) => {
//         const speechToText = event.results[0][0].transcript;
//         setTranscript(speechToText);
//       };
//       recognition.start();
//     }
//   }, [isListening]);

//   const handleInputChange = (event) => {
//     setTranscript(event.target.value);
//   };

//   const handleMessageSend = async () => {
//     const response = await sendMessageToChatGPT(transcript, API_KEY);
//     setMessages([
//       ...messages,
//       { message: transcript, sender: "user" },
//       { message: response, sender: "chatbot" },
//     ]);
//     setTranscript("");
//   };

//   return (
//     <div>
//       <div>
//         {messages.map((messageObj, index) => (
//           <div key={index} className={messageObj.sender}>
//             {messageObj.message}
//           </div>
//         ))}
//       </div>
//       <div>
//         <textarea
//           placeholder="Hey Pal!"
//           value={transcript}
//           onChange={handleInputChange}
//         />
//         <button onClick={handleMessageSend}>Send</button>
//         <button onClick={() => setIsListening(!isListening)}>
//           Start/Stop listening
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ChatWindow;
