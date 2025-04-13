import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [question, setQuestion] = useState(0);

  async function generateAnswer() {
    console.log("loading..");
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyD1CIg_i77G7UhPBgH9VEXNFNk1OZ7l1N0",
      method: "post",
      data: {
        contents: [
          { parts: [{ text: "Write a story about a magic backpack" }] },
        ],
      },
    });
    console.log(
      response["data"]["candidates"][0]["content"]["parts"][0]["text"]
    );
  }
  return (
    <>
      <h1>Chat AI</h1>
      <textarea value={12} cols="30" rows="10"></textarea>
      <button onClick={generateAnswer}>Generate answer</button>
    </>
  );
}

export default App;
