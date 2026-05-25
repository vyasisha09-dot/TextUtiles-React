import "./App.css";
import About from "./components/About";
import Navbar from "./components/navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //this is used to take values out of an array and store them into variables easily.
  const [alert, setAlert] = useState(null);
  const themes = {
    light: {
      body: "white",
      name: "Light",
    },
    dark: {
      body: "#042743",
      name: "Dark",
    },
  };
  //this how you create  arrow function object in react
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };
  const handleDarkMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    document.body.style.backgroundColor = themes[newMode].body;
    showAlert(`${themes[newMode].name} mode has been enabled`, "success");
     // document.title = `TextUtile - ${themes[newMode].name} Mode`;
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtile" mode={mode} handleDarkMode={handleDarkMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtiles - Word counter, Character counter, Remove extra spaces"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
