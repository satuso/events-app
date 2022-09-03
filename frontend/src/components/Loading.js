import React from "react"

const Loading = ({ loading }) => {
  return (
    <div className="loading">
      <span className='message'>{loading ? "Ladataan..." : ""} <i className={loading ? "fas fa-hourglass-half rotate" : "off"}></i></span>
    </div>
  )
}
export default Loading