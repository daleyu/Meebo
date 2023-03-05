import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import { InputButton, QueryArea } from "../layouts/homePage.style";
import { BottomDiv, InputArea } from "../layouts/pet.style";

export default function App() {
  //get apikey and save it as string
  const APIKEY = process.env.OPENAI_API_KEY;
  const [ques, setQues] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  // const configuration = new Configuration({
  //   apiKey: process.env.OPENAI_API_KEY
  // });
  const configuration = new Configuration({
    apiKey:, //put your api key here
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
      <p>{result}</p>
      <BottomDiv classname="App">
        <InputArea onSubmit={handleSubmit}>
          <QueryArea
            value={ques}
            onChange={(e) => setQues(e.target.value)}
            rows={1}
            cols={50}
          ></QueryArea>
          <InputButton>
            <button style={{ margin: "20px" }} type="submit">
              Generate
            </button>
          </InputButton>
        </InputArea>
      </BottomDiv>
    </>
  );
}
