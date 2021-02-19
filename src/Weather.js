import React, { useState } from "react";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Loading from "./loading"
import WeatherInfo from "./WeatherInfo"
import WeatherForecast from "./WeatherForecast"

import "./index.css";

export default function Weather(props) {
    // const [setWeatherData, weatherData] = useState({ ready: false });
    // const [ready, setReady] = useState(false);
    // const [weather, setWeather] = useState(null);
     const [weatherData, weatherDataSet] =useState({ })
     const [city, setCity] = useState(props.defaultCity)

    function WeatherShow(response) { 
//      console.log(response.data);

        weatherDataSet({
            ready: true,
            temperature: Math.round(response.data.main.temp),
            Wind: Math.round(response.data.wind.speed),
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            icon: response.data.weather[0].icon
        })        
    }
    
    function search() {
        //  const apiKey = "deb4d0036edfa966c7a36750fd024ceb"
        //   let city = "Denver"
          let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=deb4d0036edfa966c7a36750fd024ceb&units=metric`
          axios.get(apiUrl).then(WeatherShow)
    }

    function weatherSubmit(event) {
        event.preventDefault();
//      console.log(city)
        search();
    }

    function weatherUpdate(event) {
        setCity(event.target.value)
    }

    if (weatherData.ready) {

        return (
            <div className="SearchForm">
                <Container>
                    <Row>
                        <Col>
                            <form className="searchBox" onSubmit={weatherSubmit}> 
                                <input type="search" placeholder="Location" onChange={weatherUpdate} /> {" "}
                                <Button variant="primary" type="submit">Search</Button>
                                
                            </form>
                            <hr />
                        <WeatherInfo info={weatherData} />
                        </Col>
                    </Row>
                </Container>
                <hr />
                <WeatherForecast city={weatherData.city}/>
            </div>
        )
    } else {
        search()
            return (
                <div className = "Loading"> 
                    <Loading />
                </div>
                )
    }    
}