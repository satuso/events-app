import React from "react"
import { useNavigate } from "react-router-dom"

const GoBack = () => {
  const navigate = useNavigate()
  return (
    <div className="navigate-links">
      <button className="navigate" onClick={() => navigate(-1)}>← Takaisin</button>
    </div>
  )
}
export default GoBack