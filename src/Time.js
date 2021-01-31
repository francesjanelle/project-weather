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
            let month = months[nowDate.getMonth()]

            let date = nowDate.getDate()

            if (date < 10) {
                date = `0${date}`
            }

            const year = nowDate.getFullYear()
            
    return (
        <h3> {month} {date}, {year} </h3>) 
        }