import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import axios from "axios"
import Header from "./components/Header"
import Events from "./pages/Events"
import Event from "./pages/Event"
import ScrollToTop from "./components/ScrollToTop"

const App = () => {
  const [events, setEvents] = useState([])
  const [filter, setFilter] = useState(["", ""])
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    axios
      .get("/api/events/?limit=3000")
      .then(data => {
        setEvents(data.data.data.reverse())
        setLoading(false)
      })
      .catch(error => {
        setMessage(error.toString())
      })
  }, [filter])

  let matchEvents = events.filter(item => item.description.body.toLowerCase().includes(filter[0]) && item.event_dates.starting_day.includes(filter[1]))
  console.log(filter)
  console.log(matchEvents)
  if (!filter) {
    matchEvents = []
  } else {
    matchEvents = events.filter(item => item.description.body.toLowerCase().includes(filter[0]) && item.event_dates.starting_day.includes(filter[1]))
  }

  return (
    <div className="container">
      <ScrollToTop/>
      <Header />
      <Routes>
        <Route exact path='/' element={
          <Events 
            events={matchEvents}
            setFilter={setFilter}
            filter={filter}
            message={message}
            loading={loading}
          />
        }/>
        <Route path={"/:id"} element={
          <Event 
            setMessage={setMessage}
            message={message}
            setLoading={setLoading}
            loading={loading}
          />
        }/>
      </Routes>
    </div>
  )
}

export default App