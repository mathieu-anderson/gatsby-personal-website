import React from "react"
import "./MiniPill.css"

const MiniPill = ({ icon, name }) => {
  const [showDetails, setShowDetails] = React.useState(false)
  return (
    <button
      className={`${
        showDetails ? "open" : "close"
      } minipill ${name.toLowerCase()}-minipill`}
      onClick={() => {
        setShowDetails(!showDetails)
      }}
    >
      {showDetails ? (
        <div className="minipill-name">{name}</div>
      ) : (
        <div className="minipill-icon">{icon}</div>
      )}
    </button>
  )
}

export default MiniPill
