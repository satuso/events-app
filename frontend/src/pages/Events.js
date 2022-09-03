import React from "react"
import EventCard from "../components/EventCard"
import { Link } from "react-router-dom"
import Filter from "../components/Filter"
import Loading from "../components/Loading"

const Events = ({ events, setFilter, filter, message, loading }) => {
  return (
    <>
      <div className="page">
        <Loading loading={loading}/>
        <h1>Hae tapahtumia Helsingissä!</h1>
        <Filter 
          setFilter={setFilter}
          filter={filter}
          message={message}
          loading={loading}
        />
      </div>
      {events.map((event, index) =>
        <Link to={`/${event.id}`} key={index}>
          <EventCard event={event}/>
        </Link>
      )}
    </>
  )
}
export default Events