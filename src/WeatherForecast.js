import React, { useState } from "react"
import axios from "axios"

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false)
    const [forecast, setForecast] = useState(null)

    function ForecastHandle(response) {
        setForecast(response.data.list)
        setLoaded(true)
    }
    
    if (loaded) { 
        console.log(forecast)
    }

   //  const key = deb4d0036edfa966c7a36750fd024ceb
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=deb4d0036edfa966c7a36750fd024ceb&units=metric`
    axios.get(apiUrl).then(ForecastHandle)

    return <h2>{props.city}</h2>
 }