import React from "react"
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
   /* const codeMap = {

    } */

    return (
        <div className="weather-icon">
           <ReactAnimatedWeather
                icon = "CLEAR_DAY"
                color = "blue"
                size = {65}
                animate = {true}
            />
        </div>
    )
}