import React, { useState } from "react"
import ForecastPreview from "./WeatherForecastPreview"
import axios from "axios"

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false)
    const [forecast, setForecast] = useState(null)

    function ForecastHandle(response) {
        console.log(response.data)
        setForecast(response.data)
        setLoaded(true)
    }
    
    if (loaded) { 
  //      console.log(forecast.list[0])
 
        return ( 
        <div className="forecastPreview">
            <ForecastPreview data={forecast.list[0]} />
            <ForecastPreview data={forecast.list[1]} />
            <ForecastPreview data={forecast.list[2]} />
            <ForecastPreview data={forecast.list[3]} />
            <ForecastPreview data={forecast.list[4]} />
       </div> )
    } else {

   //  const key = deb4d0036edfa966c7a36750fd024ceb
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=deb4d0036edfa966c7a36750fd024ceb&units=metric`
    axios.get(apiUrl).then(ForecastHandle)

    return null; 
    }
}