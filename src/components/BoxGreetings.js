import React from "react"
import Box from "./Box"
import { MoodContext } from "../hooks/useMoodContext"
import Emphasis from "./Emphasis"

const moods = {
  enthusiastic: {
    moodClassName: "enthusiastic",
    moodText: "Happy you're here!",
  },
  curious: {
    moodClassName: "curious",
    moodText: "How are you?",
  },
  openminded: {
    moodClassName: "openminded",
    moodText: "Welcome",
  },
}
const initialMood = {
  moodClassName: "",
  moodText: "Nice to meet you",
}

const BoxGreetings = () => {
  const { mood } = React.useContext(MoodContext)

  return (
    <Box
      className="Section-1"
      moods={moods}
      initialMood={initialMood}
      currentMood={mood}
    >
      <div className="greetings-container">
        <p>
          I'm a <Emphasis>front-end</Emphasis> specialist. Love being part of
          cross-functional teams and being the{" "}
          <Emphasis>logical bridge</Emphasis> between the back-end devs and the
          designers. I’m very proficient with <Emphasis>React</Emphasis>, but I
          love building UIs in a <Emphasis>declarative way</Emphasis>,
          regardless of the tool. And always eager to adopt whatever is
          consensual with the team! Coming from a{" "}
          <Emphasis>fullstack background</Emphasis>, I am familiar with back-end
          tech (Node, Go, SQL), and delighted to dig in when needed!
        </p>
      </div>
    </Box>
  )
}

export default BoxGreetings
