import React, { useState } from "react"
import WeatherIcon from "./WeatherIcon"

export default function ForecastPreview(props) { 
    return ( <div className="forecast">
                {new Date(props.data.dt * 1000).getHours()}:00
                <WeatherIcon code={props.list[0].weather[0].icon} />
                {Math.round(props.list[0].main.temp)} 
            </div>)
}

/* <div className="forecast">
                {new Date(forecast.list[0].dt * 1000).getHours()}:00
                <WeatherIcon code={forecast.list[0].weather[0].icon} />
                {Math.round(forecast.list[0].main.temp)} 
            </div>
            */