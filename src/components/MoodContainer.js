import React from "react"
import "./MoodContainer.css"

const MoodContainer = ({ moods, initialMood, currentMood }) => {
  const activeMood = moods[currentMood] || initialMood

  return (
    <div className={`mood-container ${activeMood.moodClassName}`}>
      {activeMood.moodText}
    </div>
  )
}

export default MoodContainer
