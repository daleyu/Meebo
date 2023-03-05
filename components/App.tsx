import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import {
  ChatBubble,
  ChatButton,
  InputButton,
  QueryArea,
} from "../layouts/homePage.style";
import { BottomDiv, InputArea, ResponseText } from "../layouts/pet.style";

export default function App() {
  //get apikey and save it as string
  const APIKEY = process.env.OPENAI_API_KEY;
  const [ques, setQues] = useState("");
  const [result, setResult] = useState(
    "I can assist you with being more environmentally friendly. \n\nIf you want to learn about how to be more environmentally friendly with an item then push the tree button and type a product name. \n"
  );
  const [loading, setLoading] = useState(false);

  // const configuration = new Configuration({
  //   apiKey: process.env.OPENAI_API_KEY
  // });
  const configuration = new Configuration({
    apiKey: "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", //put your api key here
  });

  const openai = new OpenAIApi(configuration);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(ques);
    setLoading(true);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: ques,
      temperature: 0.5,
      max_tokens: 2042,
    });
    if (response.data.choices[0].text !== undefined) {
      setResult(response.data.choices[0].text);
    } else {
      setResult("");
    }
    setLoading(false);
  };
  return (
    <>
      <ChatBubble>
        <ResponseText>{result}</ResponseText>
      </ChatBubble>
      <BottomDiv classname="App">
        <InputArea onSubmit={handleSubmit}>
          <QueryArea
            value={ques}
            onChange={(e) => setQues(e.target.value)}
            rows={1}
            cols={50}
          ></QueryArea>
          <InputButton>
            <ChatButton style={{ margin: "20px" }} type="submit">
              Generate
            </ChatButton>
          </InputButton>
        </InputArea>
      </BottomDiv>
    </>
  );
}
