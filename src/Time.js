import React from "react"

export default function formatDate(timestamp) {

            let nowDate = new Date(timestamp)

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
            let month = months.[nowDate.getMonth()]
      return (`${month}`) 
        }