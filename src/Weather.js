import React, { useState } from "react"
import axios from "react-axios"
import "./index.css"

export default function Weather(props) {
    const [setCity, city] = useState("")

    function WeatherShow(response) { 
        console.log(response.data)
    }


    function WeatherSearch(event) {
        event.preventDefault()
      //  const apiKey = "deb4d0036edfa966c7a36750fd024ceb"
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=deb4d0036edfa966c7a36750fd024ceb&units=metric`
        axios.get(apiUrl).then(WeatherShow)
    }

    function WeatherUpdate() { 

    }

    return ( <div className="weather-form">
        <form onSubmit={WeatherSearch}>
            <input type="search" placeholder="Location" onChange={WeatherUpdate} /> {" "}
            <input type="submit" value="Search"/>
        </form>
    </div>)
}