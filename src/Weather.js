import React, { useState } from "react";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Time from "./Time";
import "./index.css";

export default function Weather(props) {
    const [setWeatherData, weatherData] = useState({ ready: false });

    function WeatherShow(response) { 
        console.log(response.data)

    }

    if (ready) {

        return (
            <div className="weather-form">
                <div className="container">
                <h1> Denver </h1>
                    <Time />
                    <hr/> 
                    <Container>
                        <Row>
                            <Col>
                                <h2> 20° </h2>
                                <h3> Clear Skies </h3>
                            </Col>
                            <Col>
                                <ul>
                                    <li> 💧  Precipitation:  </li>
                                    <li> 🎐  Humidity</li>
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