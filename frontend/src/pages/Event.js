import React from "react"
import Dates from "../components/Dates"
import GoBack from "../components/GoBack"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"

const Event = ({ setMessage, setLoading }) => {
  const { id } = useParams()
  const [event, setEvent] = useState([])
  console.log(event)
  
  useEffect(() => {
    setLoading(true)
    axios
      .get(`/api/events/${id}`)
      .then(data => {
        setEvent(data.data)
        setLoading(false)
      })
      .catch(error => {
        setMessage(error.toString())
      })
  }, [id, setMessage, setLoading])

  const convertDate = (date) => {
    const options = {year: "numeric", month: "numeric", day: "numeric" }
    const convertedDate = new Date(date).toLocaleDateString("fi-FI", options)
    return convertedDate
  }

  if (event.length === 0) return <div className="page"><span className='message'>{"Ladataan..."} <i className={"fas fa-hourglass-half rotate"}></i></span><GoBack /></div>

  return (
    <div className="page">
      <h2><i className="fas fa-thumbtack"></i> {event.name.fi}</h2>
      <Dates event={event}/>
      <p><i className="fas fa-map-marker-alt"></i> {event.location.address.street_address} {event.location.address.postal_code} {event.location.address.locality}</p>
      {event.info_url && <p><i className="fas fa-link"></i> <a href={event.info_url} target="blank">{event.name.fi}</a></p>}
      <div className="images">
        {event.description.images && event.description.images.map(image =>
          <div key={image.media_id}>
            <img 
              src={image.url}
              alt={event.name.fi}
              className="large-img"
            />
            <figcaption>
              {image.copyright_holder}
            </figcaption>
          </div>
        )}
      </div>
      <span dangerouslySetInnerHTML={{__html: event.description.body}}></span>
      <span className="updated">Päivitetty: {convertDate(event.modified_at)}</span>
      <GoBack />
    </div>
  )
}
export default Event