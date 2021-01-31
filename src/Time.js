import React from "react"

import "./index.css"

export default function formatDate(props) {

    console.log(props.date)

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
        <div className="Date">
            <h3> {month} {date}, {year} </h3>
        </div>
   /*     <div className="Today">
            <h4> {day} </h4> 
            </div>  */
    )
}