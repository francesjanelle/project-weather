import React from "react"
import Weather from "./Weather"
// import Time from "./Time"
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
    <header>
    <h1> Weather App React</h1>
    </header>
    <body>
      <div className="MainCon">
        <Weather defaultCity="Denver" />
          </div>
          
      </body>
    <footer> 
      <div className="myName">
       <small>
          <a href="https://github.com/francesjanelle/project-weather" target="_blank" rel="noreferrer">{" "}GitHub Repsitory</a>
        {" "}by:{" "}📧 <a href="mailto:frances.janelle.torres@gmail.com" target="_blank" rel="noreferrer"> Frances-Janelle Torres</a>
       </small>
      </div>
        </footer>
        </div>
  </div> )
};