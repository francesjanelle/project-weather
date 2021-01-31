import React, { useState } from "react";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Time from "./Time";
import "./index.css";

export default function Weather(props) {
    // const [setWeatherData, weatherData] = useState({ ready: false });
    // const [ready, setReady] = useState(false);
    // const [weather, setWeather] = useState(null);
     const [weatherData, weatherDataSet] =useState({ })

    function WeatherShow(response) { 
    //   console.log(response.data);

        weatherDataSet({
            ready: true,
            temperature: Math.round(response.data.main.temp),
            Wind: Math.round(response.data.wind.speed),
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            city: response.data.name,
            date: new Date(response.data.dt * 1000)
        })        
    }

    if (weatherData.ready) {

        return (
            <div className="weather-form">
                <div className="container">
                    <h1> { weatherData.city } </h1>
                    <Time date={ weatherData.date} />
                    <hr/> 
                    <Container>
                        <Row>
                            <Col>
                                
                                <h2> {weatherData.temperature}°C </h2>
                                <h4 className="text-capitalize"> {weatherData.description}  </h4>
                            </Col>
                            <Col>
                                <ul>
                                    <li> 💧  Humidity: { weatherData.humidity } %  </li>
                                    <li> 🎐  Wind: { weatherData.Wind } km/h </li>
                                </ul>
                            </Col>
                            <Col>
                                <form>
                                    <input type="search" placeholder="Location" /* onChange={WeatherUpdate} */ /> {" "}
                                    <Button variant="primary" type="submit">Search</Button>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                    <hr />
                </div>
        </div>)
    } else {
        
      //  const apiKey = "deb4d0036edfa966c7a36750fd024ceb"
      //   let city = "Denver"
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=deb4d0036edfa966c7a36750fd024ceb&units=metric`
        axios.get(apiUrl).then(WeatherShow)

        return "Hold on.."
    }    
}