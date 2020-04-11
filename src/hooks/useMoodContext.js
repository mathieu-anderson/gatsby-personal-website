import React from "react"

const moods = {
  default: null,
  enthusiastic: 0,
  curious: 1,
  openminded: 2,
}

export const MoodContext = React.createContext(moods)

export const MoodProvider = ({ children }) => {
  const [mood, setMood] = React.useState(null)
  const handleSetMood = mood => {
    setMood(moods[mood])
  }
  return (
    <MoodContext.Provider value={{ mood, handleSetMood }}>
      {children}
    </MoodContext.Provider>
  )
}
