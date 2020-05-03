import React from "react"
import "./Emphasis.css"
import { MoodContext } from "../hooks/useMoodContext"

const Emphasis = ({ children }) => {
  const { mood } = React.useContext(MoodContext)
  return <em className={`em em-${mood}`}>{children}</em>
}

export default Emphasis
