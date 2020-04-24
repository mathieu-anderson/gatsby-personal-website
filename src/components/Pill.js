import React from "react"
import "./Pill.css"

const Pill = ({ icon, name, details }) => {
  const [showDetails, setShowDetails] = React.useState(false)
  return (
    <button
      title={`${name} tag`}
      className={`${
        showDetails ? "open" : "close"
      } pill ${name.toLowerCase()}-pill`}
      onClick={() => {
        setShowDetails(!showDetails)
      }}
    >
      <div className="pill-head">
        {icon}
        <div className="pill-name">{name}</div>
      </div>
      <div className="pill-details" aria-hidden={showDetails ? false : true}>
        <div>
          <b>Since </b>
          {details.since}
        </div>
        <div>
          <b>Using it </b>
          {details.frequency}
        </div>
        <div>
          <b>Love </b>
          {details.like}
        </div>
      </div>
    </button>
  )
}

export default Pill
