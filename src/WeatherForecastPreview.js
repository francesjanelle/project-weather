import React from "react"
import WeatherIcon from "./WeatherIcon"

export default function ForecastPreview(props) {
    
    function forecastHours() {
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours()

        return `${hours}:00`
    }

    function forecastTemp() {
       let temp = Math.round(props.data.main.temp)
       
       return `${temp}°C`
    }
    
    return  (
        <div className="forecast">
           <h4> {forecastHours()} </h4>
            <WeatherIcon code={props.data.weather[0].icon} />
           <h4> {forecastTemp()} </h4>
        </div>
    )
}

/* <div className="forecast">
                {new Date(forecast.list[0].dt * 1000).getHours()}:00
                <WeatherIcon code={forecast.list[0].weather[0].icon} />
                {Math.round(forecast.list[0].main.temp)} 
            </div>
            */