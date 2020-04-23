import React from "react"
import Box from "./Box"
import { MoodContext } from "../hooks/useMoodContext"

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
          I'm a <b>front-end</b> specialist. Love being part of cross-functional
          teams and being the <b>logical glue</b> between the back-end devs and
          the designers.
        </p>
        <p>
          My favourite tool is currently <b>React</b>, but I love anything that
          lets me to build UIs in a <b>declarative way</b>. And always eager to
          adopt whatever is consensual in the team!
        </p>
        <p>
          I come from a <b>fullstack background</b>. Familiar with back-end tech
          (Node, Go, SQL databases), and delighted to dive into it when it is
          required!
        </p>
      </div>
    </Box>
  )
}

export default BoxGreetings
