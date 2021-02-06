import React from "react"

import "./index.css"

export default function Today(props) {

 //   console.log(props.date)

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]

    let day = days[props.date.getDay()];

    return (
        <div className="Current">
            <h5>
                {day}
            </h5>
        </div>
    )
};