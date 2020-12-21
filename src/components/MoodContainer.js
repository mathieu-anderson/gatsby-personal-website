import React from "react"
import "./MoodContainer.css"

const MoodContainer = ({ moods, initialMood, currentMood }) => {
  const activeMood = moods[currentMood] || initialMood

  return (
    <div className="mood-container">
      <div className={activeMood.moodClassName}>{activeMood.moodText}</div>
    </div>
  )
}

export default MoodContainer
