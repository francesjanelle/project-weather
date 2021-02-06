import React from "react"

export default function WeatherValue(props) { 
    return (
        <div className="weather-value">
            <a href="celsius"> °C </a> 
            |
            <a href="fahrenheit"> °F </a>
        </div>
            )
}