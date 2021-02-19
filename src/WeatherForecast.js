import React, { useState } from "react"
// import WeatherIcon from "./WeatherIcon"
import ForecastPreview from "./WeatherForecastPreview"
import axios from "axios"

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false)
    const [forecast, setForecast] = useState(null)

    function ForecastHandle(response) {
        setForecast(response.info)
        setLoaded(true)
    }
    
    if (loaded) { 
  //      console.log(forecast.list[0])
        return (
            <ForecastPreview props={forecast.list[0]}/>
            )
    } else {

   //  const key = deb4d0036edfa966c7a36750fd024ceb
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=deb4d0036edfa966c7a36750fd024ceb&units=metric`
    axios.get(apiUrl).then(ForecastHandle)

    return null; 
    }
}