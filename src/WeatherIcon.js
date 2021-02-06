import React from "react"
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
   /* const codeMap = {

    } */

    return (
        <div className="weathericon">
            <img
                src={props.info.icon}
                alt={props.info.description} 
                /> 
        </div>
    )
}