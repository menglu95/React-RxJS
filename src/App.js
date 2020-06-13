import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Rx from "./Rx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Working with RxJS & ReactJS</p>
      </header>
      <div className="container">
        <Rx />
      </div>
    </div>
  );
}

export default App;
