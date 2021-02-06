import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Time from "./Time";
import Today from "./Today";
import WeatherIcon from "./WeatherIcon"
import WeatherValue from "./WeatherValue"
import "./index.css"

export default function WeatherInfo(props) { 

    return (
    <div className="weather-form">
        <div className="container">
            <h1> {props.info.city} </h1>
            <Time date={props.info.date} />
            <Today date={props.info.date} />
             
            <Container>
                <Row>
                    <WeatherIcon code={props.info.icon} />
                    <Col>
                      <WeatherValue celsius={props.info.temperature} />
                        <h4 className="text-capitalize"> {props.info.description}  </h4>
                    </Col>
                        
                    <Col>
                        <ul>
                            <li> 💧  Humidity: {props.info.humidity} %  </li>
                            <li> 🎐  Wind: {props.info.Wind} km/h </li>
                        </ul>
                    </Col>
                 </Row>
            </Container>
        </div>
    </div>        
    )
}