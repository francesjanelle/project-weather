import React from "react"
import Weather from "./Weather"
import Time from "./Time"
import './index.css'

export default function App() {
  return (
  <div className="App">
    <header>
    <h1> Weather App </h1>
    </header>
    <body>
      <div className="MainCon">
        <Time />
        <Weather />
      </div>
      </body>
    <footer> 
      <div className="myName">
       <small>
          <a href="https://github.com/francesjanelle/project-weather" target="_blank">{" "}GitHub Repsitory</a>
        {" "}by:{" "}📧 <a href="mailto:frances.janelle.torres@gmail.com" target="_blank"> Frances-Janelle Torres</a>
       </small>
      </div>
    </footer>
  </div> )
};