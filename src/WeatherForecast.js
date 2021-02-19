import React, { useState } from "react"
import ForecastPreview from "./WeatherForecastPreview"
import axios from "axios"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./index.css"

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false)
    const [forecast, setForecast] = useState(null)

    function ForecastHandle(response) {
   //     console.log(response.data)
        setForecast(response.data)
        setLoaded(true)
    }
    
    if (loaded) { 
  //      console.log(forecast.list[0])
 
        return ( 
        <div className="forecastPreview">
            <Container>
                <Row>
                    <Col>
                        <ForecastPreview data={forecast.list[0]} />
                    </Col>
                    <Col>  
                        <ForecastPreview data={forecast.list[1]} />
                    </Col>
                    <Col>    
                        <ForecastPreview data={forecast.list[2]} />
                    </Col>
                    <Col>    
                        <ForecastPreview data={forecast.list[3]} />
                    </Col>
                    <Col>    
                        <ForecastPreview data={forecast.list[4]} />
                    </Col>
                </Row>
            </Container>
       </div> )
    } else {

   //  const key = deb4d0036edfa966c7a36750fd024ceb
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=deb4d0036edfa966c7a36750fd024ceb&units=metric`
    axios.get(apiUrl).then(ForecastHandle)

    return null; 
    }
}