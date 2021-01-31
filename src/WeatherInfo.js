import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Time from "./Time";
import Today from "./Today"
import "./index.css"

export default function WeatherInfo(props) { 

    return (

    <div className="weather-form">
        <div className="container">
            <h1> {props.data.city} </h1>
                <Time date={props.data.date} />
                <Today date={props.data.date} />
                <hr/> 
                <Container>
                    <Row>
                        <Col>
                        
                            <h2> {props.data.temperature}°C </h2>
                            <h4 className="text-capitalize"> {props.data.description}  </h4>
                        </Col>

                        <Col>
                            <ul>
                                <li> 💧  Humidity: {props.data.humidity} %  </li>
                                <li> 🎐  Wind: {props.data.Wind} km/h </li>
                            </ul>
                        </Col>
                     </Row>
                </Container>
        </div>
    </div>
        
                        )
}