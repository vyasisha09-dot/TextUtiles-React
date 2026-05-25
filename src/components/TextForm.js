import React, { useState } from "react";

export default function TextForm(props) {
  const pageStyles = {
    light: {
      backgroundColor: "white",
      color: "black",
    },
    dark: {
      backgroundColor: "#042743",
      color: "white",
    },
  };
  const currentStyle = pageStyles[props.mode] || pageStyles.light;

  const handleUpclick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  };
  const handleLoclick = () => {
    // console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  };
  const handleclearclick = () => {
    // console.log("Clear text was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!","success");
  };
  const handlecopy = () => {
    //  console.log("i am copy");
     var text = document.getElementById("exampleFormControlTextarea1");
     text.select();
     navigator.clipboard.writeText(text.value);
     document.getSelection().removeAllRanges();
      props.showAlert("Text copied to clipboard!","success");
  };
  const handleExtraSpaces = () => {
    //  console.log("i am extra spaces");
     let newText = text.split(/[ ]+/);
     setText(newText.join(" "));
      props.showAlert("Extra spaces removed!","success");
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={currentStyle}
      >
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>
          Convert to Uppercase
        </button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoclick}>
          Convert to Lowercase
        </button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearclick}>
          Clear Text
        </button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopy}>
          Copy Text
        </button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={currentStyle}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview!"}
        </p>
      </div>
    </>
  );
}
