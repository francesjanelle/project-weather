import React, {useState} from "react"
import "./index.css"
// import WeatherButtons from "./WeatherButtons"


export default function WeatherValue(props) { 
    const [unit, setUnit] = useState("celsius")

   function showFahr(event) { 
        event.preventDefault()
        setUnit("fahrenheit")
    }

    function showCels(event) { 
        event.preventDefault()
        setUnit("celsius")
    }

    function fahrenheit() { 
        return (
            Math.round((props.celsius  * (9 / 5)) + 32)
        )
    }

    if (unit === "celsius") {
        return (
            <div className="weather-value">
                <h2> {props.celsius}°C </h2>
                   <a href="/" onClick={showFahr}>°F</a>
            </div>
        ) 
    } else {
        return (
            <div className="weather-value">
                <h2> {fahrenheit()}°F</h2>
                <a href="/" onClick={showCels}>°C</a>       
            </div>
        )
     }
};