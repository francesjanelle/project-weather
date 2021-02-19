import React from "react"
import WeatherIcon from "./WeatherIcon"

export default function ForecastPreview(props) {
    
    function forecastHours() {
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours()

        return `${hours}:00`
    }

    function forecastTemp() {
       let temp = Math.round(props.list[0].main.temp)
       
       return `${temp}°C`
    }
    
    return  (
        <div className="forecast">
            {forecastHours()}
            <WeatherIcon code={props.list[0].weather[0].icon} />
            {forecastTemp()}
        </div>
    )
}

/* <div className="forecast">
                {new Date(forecast.list[0].dt * 1000).getHours()}:00
                <WeatherIcon code={forecast.list[0].weather[0].icon} />
                {Math.round(forecast.list[0].main.temp)} 
            </div>
            */