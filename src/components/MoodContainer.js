import React from "react"
import "./MoodContainer.css"

const MoodContainer = ({ qualifiers, initialQualifier, currentMood }) => {
  const activeMood =
    qualifiers.find(q => currentMood === q.index) || initialQualifier

  return (
    <div className={activeMood.whimsyClassName}>{activeMood.whimsyText}</div>
  )
}

export default MoodContainer
