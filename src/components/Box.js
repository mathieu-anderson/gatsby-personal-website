import React from "react"
import MoodContainer from "./MoodContainer"

import "./Box.css"

const Box = ({ children, moods, initialMood, currentMood, className }) => {
  return (
    <section className={`${className} box-${currentMood}  box-container`}>
      <h2 className="box-heading">
        <MoodContainer
          moods={moods}
          initialMood={initialMood}
          currentMood={currentMood}
        />
      </h2>
      {children}
    </section>
  )
}

export default Box
