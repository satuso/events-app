import React from "react"
import Dates from "./Dates"

const EventCard = ({ event }) => {
  return (
    <div className="card">
      <div className="empty">
        {event?.description.images && event.description.images.slice(0, 1).map(image =>
          <img 
            src={image.url}
            key={image.media_id}
            alt={image.copyright_holder}
            className="small-img"
          />
        )}
      </div>
      <div className="card-details">
        <h2><i className="fas fa-thumbtack"></i> {event.name.fi}</h2>
        <Dates event={event}/>
        <p>{event.description.intro}</p>
        <p><i className="fas fa-map-marker-alt"></i> {event.location.address.street_address} {event.location.address.postal_code} {event.location.address.locality}</p>
      </div>
    </div>
  )
}
export default EventCard