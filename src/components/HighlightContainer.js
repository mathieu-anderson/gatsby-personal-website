import React from "react"
import "./HighlightContainer.css"
import { MoodContext } from "../hooks/useMoodContext"

const HighlightContainer = ({ children }) => {
  const { mood } = React.useContext(MoodContext)

  return (
    <section class={`highlight-container highlight-${mood}`}>
      {children}
    </section>
  )
}

export default HighlightContainer
