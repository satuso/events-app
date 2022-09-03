import React from "react"

const Dates = ({ event }) => {
  const convertDate = (date) => {
    const options = {year: "numeric", month: "numeric", day: "numeric" }
    const convertedDate = new Date(date).toLocaleDateString("fi-FI", options)
    return convertedDate
  }

  return (
    <div>
      <p>
        <span>
          <i className="far fa-calendar-alt"></i>
          {` ${convertDate(event.event_dates.starting_day)}`} 
          {convertDate(event.event_dates.ending_day) === convertDate(event.event_dates.starting_day) || event.event_dates.ending_day === null
            ? "" 
            : ` - ${convertDate(event.event_dates.ending_day)}`}
        </span>
      </p>
    </div>
  )
}

export default Dates