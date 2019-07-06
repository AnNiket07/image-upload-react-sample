import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import ImageUpload from "./components/ImageUpload";
import Hello from "./components/Hello";
// import Sample from "./components/Sample";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageUpload />
        {/* <Sample /> */}
        <Hello />
      </header>
    </div>
  );
}

export default App;
