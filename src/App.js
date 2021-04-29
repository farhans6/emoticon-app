import React, { useState } from "react";
import "./styles.css";

const emotiDictionary = {
  ":)": "Smiley face",
  ":-)": "Smiley face",
  ":]": "Content face",
  ";)": "winky face",
  ";-)": "Winky face ",
  ":D": "Thrilled face ",
  ":-D": "Thrilled face",
  ";P": "Goofy face ",
  ";-P": "Goofy face ",
  ":p": "Silly face",
  ":-P": "Silly face",
  "8)": "Cool guy face ",
  "8-)": "Cool guy face",
  ":|": "Blank face",
  ":-|": "Blank face",
  ":(": "Sad face",
  ":-(": "Sad face",
  o_O: "Grossed out face",
  "o.O": "Grossed out face",
  ":/": "Sick face",
  ":-/": "Sick face",
  ":O": "surprised face",
  ":-O": "surprised face",
  O_O: "Tweak face",
  "O.O": "Tweak face",
  o_o: "Grossed out face",
  "#)": "Poundie",
  "#-)": "Poundie",
  "^.^": "Nerdie Poundie",
  "^_^": "Nerdie Poundie",
  "^^": "Nerdie Poundie",
  ":x": "Kissy face",
  ":-x": "Kissy face",
  "<3": "Heart",
  "#(": "Frowndie",
  "m)": "Facepalm",
  "m-)": "Facepalm",
  xD: "Crying laughing",
  XD: "Crying laughing",
  ":'(": "Crying face",
  ":-'(": "Crying face"
};

var emotisWeKnow = Object.keys(emotiDictionary);

export default function App() {
  var [shortCut, setShortCut] = useState("");

  function emotiHandler(event) {
    var userInput = event.target.value;
    var shortCut = emotiDictionary[userInput];
    // console.log("clicked",shortCut);

    if (shortCut === undefined) {
      shortCut = "sorry, couldn't find";
    }
    setShortCut(shortCut);
  }

  function emotiClickHandler(item) {
    var shortCut = emotiDictionary[item];
    setShortCut(shortCut);
  }
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Search Emoticon!!!</h1>

      <h2>Search Emoticon name by providing shortcut.</h2>

      <input
        onChange={emotiHandler}
        style={{ padding: ".5rem", width: "300px" }}
      ></input>

      <div style={{ padding: "1rem", color: "blue", fontSize: "25px" }}>
        {shortCut}
      </div>

      <h2 style={{ padding: "1rem" }}>Search Emoticon by clicking me. </h2>
      {emotisWeKnow.map((item) => {
        return (
          <button
            style={{
              cursor: "pointer",
              border: ".5rem",
              borderRadius: "1.2rem",
              margin: "1rem",
              padding: "1.4rem",
              fontSize: "20px"
            }}
            onClick={() => emotiClickHandler(item)}
          >
            {item}{" "}
          </button>
        );
      })}
      <hr />
    </div>
  );
}
