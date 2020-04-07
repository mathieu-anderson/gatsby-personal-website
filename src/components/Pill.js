import React from "react"
import "./Pill.css"

const Pill = ({ icon, name }) => {
  return (
    <button className={`pill ${name.toLowerCase()}-pill`}>
      {icon}
      <div className="pill-name">{name}</div>
    </button>
  )
}

export default Pill
