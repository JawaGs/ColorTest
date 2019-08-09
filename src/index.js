import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Juego from "./Components/Juego/Juego";

class App extends React.Component {
  render() {
    return <div>
      <Juego />
    </div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App  />, mountNode);