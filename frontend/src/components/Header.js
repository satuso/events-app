import React, { useState, useEffect } from "react"

const Header = () => {
  const [small, setSmall] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 100)
      )
    }
  }, [])

  return (
    <>
      <div className={small ? "header small-header" : "header"}>
        <h1>Helsinki Events</h1>
      </div>
    </>
  )
}

export default Header