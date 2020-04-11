import React from "react"
import Box from "./Box"
import { MoodContext } from "../hooks/useMoodContext"

const qualifiers = [
  {
    index: 0,
    whimsyClassName: "enthusiastic",
    whimsyText: "Happy you're here!",
  },
  {
    index: 1,
    whimsyClassName: "curious",
    whimsyText: "How are you?",
  },
  {
    index: 2,
    whimsyClassName: "openminded",
    whimsyText: "Welcome",
  },
]

const initialQualifier = {
  index: null,
  whimsyClassName: "",
  whimsyText: "Nice to meet you",
}

const BoxGreetings = () => {
  const { mood } = React.useContext(MoodContext)

  return (
    <Box
      className="Section-1"
      qualifiers={qualifiers}
      initialQualifier={initialQualifier}
      currentMood={mood}
    >
      <p>
        I am a <b>front-end</b> specialist. I love being part of
        cross-functional teams and being the <b>logical glue</b> between the
        back-end devs and the designers.
      </p>
      <p>
        My favourite tool is currently <b>React</b>, but I love anything that
        allows to build UIs in a <b>declarative way</b>. And I'm always eager to
        adopt whatever is consensual in the team!
      </p>
      <p>
        I come from a <b>fullstack background</b>. I am familiar with back-end
        tech (Node, Go, SQL databases), and I'm delighted to dive into it when
        it is required!
      </p>
    </Box>
  )
}

export default BoxGreetings
