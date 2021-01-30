import React from "react"
import "./index.css"

export default function formatDate(timestamp) {

            const nowDate = new Date()

            const months = [
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
            const month = months[nowDate.getMonth()]

            const date = nowDate.getDate()

            if (date < 10) {
                date = `0${date}`
            }

            const year = nowDate.getFullYear()
            
      return (`${month} ${date}, ${year}`) 
        }