import React from "react"

import "./index.css"

export default function formatDate(props) {

    console.log(props.date)

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]

    let day = props.date.getDay();

    let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]
    
    let month = months[props.date.getMonth()]

    let date = props.date.getDate()

    if (date < 10) {
        date = `0${date}`
    }

    let year = props.date.getFullYear()
            
    return (
        <h3> {month} {date}, {year} </h3>
    )
}