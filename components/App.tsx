import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";

export default function App() {
  // const APIKEY = "";
  const [ques, setQues] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  // const configuration = new Configuration({
  //   apiKey: process.env.OPENAI_API_KEY
  // });
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
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
    <div className="App">
      <h3>Tickle me Elmo</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={ques}
          onChange={(e) => setQues(e.target.value)}
          rows={10}
          cols={50}
        ></textarea>
        <br />
        <button style={{ margin: "20px" }} type="submit">
          Generate
        </button>
      </form>
      <p>{result}</p>
    </div>
  );
}
