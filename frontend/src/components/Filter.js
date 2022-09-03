import React, { useState } from "react"

const Filter = ({ setFilter, filter }) => {
  const [input, setInput] = useState("")
  const [date, setDate] = useState("")
  const [active, setActive] = useState(false)

  const tags = ["konsertti", "kirjallisuus", "liikunta", "musiikki", "näyttely", "teatteri"]

  const filterResults = (e) => {
    e.preventDefault()
    setFilter(input)
    setInput("")
  }
  console.log(date)
  return (
    <>
      <div className="filter">
        <div className="search">
          <form>
            <input 
              className="date" 
              type="date" 
              name="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
            <input
              type="text"
              placeholder="hae"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              onFocus={(e) => e.target.placeholder = ""}
              onBlur={(e) => e.target.placeholder = "hae"}
            />
            <button onClick={filterResults} className="search-button"><i className="fas fa-search"></i></button>
            <br />
          </form>
        </div>
        <div className="tags center">
          {tags.map(tag => <span className={active ? "tag active" : "tag"} onClick={() => {
            setActive(true)
            setFilter([tag, date])
          }} key={tag}>{tag}</span>)}
        </div>
        {filter ? <span className="clear-tag" onClick={() => setFilter(null)}>tyhjennä haku</span> :  ""}
      </div>
    </>
  )
}

export default Filter