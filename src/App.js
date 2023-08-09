import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Princess Alao and is open-sourced on{" "}
          <a
            href="https://github.com/Priala/react-weather-app"
            target="_blank"
            rel="noreferrer">
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
