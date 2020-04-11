import React from "react"
import Box from "./Box"
import { MoodContext } from "../hooks/useMoodContext"

const qualifiers = [
  {
    index: 0,
    whimsyClassName: "enthusiastic",
    whimsyText: "I have an idea!",
  },
  {
    index: 1,
    whimsyClassName: "curious",
    whimsyText: "How does it work?",
  },
  {
    index: 2,
    whimsyClassName: "openminded",
    whimsyText: "Sharing is caring",
  },
]

const initialQualifier = {
  index: null,
  whimsyClassName: "",
  whimsyText: "Side projects",
}

const BoxSideProjects = () => {
  const { mood } = React.useContext(MoodContext)

  return (
    <Box
      className="Section-4"
      initialQualifier={initialQualifier}
      qualifiers={qualifiers}
      currentMood={mood}
    >
      <p>
        I love sharing knowledge, insights and learning journeys through blog
        posts and talks!
      </p>
      <ul>
        <li>
          <a
            title="Guide: a localization toolbox with React's context API"
            href="https://itnext.io/using-reacts-context-api-to-provide-a-localization-toolbox-for-your-components-48915f04bb54"
          >
            Guide: a localization toolbox with React's context API
          </a>
        </li>
        <li>
          <a
            title="Guide: types of TypeScript typings"
            href="https://medium.com/@syllaband/types-of-typescript-typings-303539f3a57b"
          >
            Guide: types of TypeScript typings
          </a>
        </li>
        <li>
          <a
            title="A proposal for clearer code reviews"
            href="https://medium.com/@syllaband/a-proposal-for-clearer-code-review-ac3ebbcc0ec6"
          >
            Thoughts: a clearer code review process (with emojis!)
          </a>
        </li>
        <li>
          <a
            title="Guide : theming Ant Design, step by step"
            href="https://medium.com/@syllaband/theming-ant-design-a-detailed-step-by-step-basic-guide-d060bef34ec4"
          >
            Guide : theming Ant Design, step by step
          </a>
        </li>
      </ul>
      <p>
        I also love building little projects to learn new tech, or just to see
        if I can!
      </p>
      <ul>
        <li>
          <a
            title="JS Equalities as a slots machine"
            href="https://github.com/mathieu-anderson/js-equality-jackpot"
          >
            JS Equalities as a slots machine
          </a>
        </li>
        <li>
          <a
            title="Tarot drawing made simple"
            href="https://github.com/mathieu-anderson/tarot-reading"
          >
            Tarot drawing made simple
          </a>
        </li>
        <li>
          <a
            title="Is this mysterious ingredient not vegan?"
            href="https://github.com/mathieu-anderson/vegan-checker"
          >
            Is this mysterious ingredient not vegan?
          </a>
        </li>
      </ul>
    </Box>
  )
}

export default BoxSideProjects
