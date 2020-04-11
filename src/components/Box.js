import React from "react"
import MoodContainer from "./MoodContainer"

import "./Box.css"

const Box = ({
  children,
  qualifiers,
  initialQualifier,
  currentMood,
  className,
}) => {
  return (
    <section className={`${className} box-container`}>
      <h2 className="box-heading">
        <MoodContainer
          qualifiers={qualifiers}
          initialQualifier={initialQualifier}
          currentMood={currentMood}
        />
      </h2>
      {children}
    </section>
  )
}

export default Box
