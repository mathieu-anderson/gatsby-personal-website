import React from "react"
import "./MiniPill.css"

const MiniPill = ({ icon, name }) => {
  const [showDetails, setShowDetails] = React.useState(false)
  return (
    <button
      title={name}
      className={`${
        showDetails ? "open" : "close"
      } minipill ${name.toLowerCase()}-minipill`}
      onClick={() => {
        setShowDetails(!showDetails)
      }}
    >
      <div className="minipill-icon">{icon}</div>
      {showDetails ? <div className="minipill-name">{name}</div> : null}
    </button>
  )
}

export default MiniPill
