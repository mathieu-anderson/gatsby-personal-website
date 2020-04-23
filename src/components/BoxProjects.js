import React from "react"
import Box from "./Box"
import MiniBoxProject from "./MiniBoxProject"
import { MoodContext } from "../hooks/useMoodContext"
import {
  JavaScriptIcon,
  ReactIcon,
  TypeScriptIcon,
  GitIcon,
  CssIcon,
  WebpackIcon,
} from "./Icons"

const moods = {
  enthusiastic: {
    moodClassName: "enthusiastic",
    moodText: "I have an idea!",
  },
  curious: {
    moodClassName: "curious",
    moodText: "How does it work?",
  },
  openminded: {
    moodClassName: "openminded",
    moodText: "Sharing is caring",
  },
}

const initialMood = {
  moodClassName: "",
  moodText: "Writing",
}

const BoxProjects = () => {
  const { mood } = React.useContext(MoodContext)

  return (
    <Box
      className="Section-4"
      initialMood={initialMood}
      moods={moods}
      currentMood={mood}
    >
      <MiniBoxProject
        project={{
          name: "Theming Ant Design : a detailed step by step basic guide",
          type: "Guide",
          date: "March 23, 2019",
          link:
            "https://medium.com/@syllaband/theming-ant-design-a-detailed-step-by-step-basic-guide-d060bef34ec4",
        }}
        techList={[
          { name: "TypeScript", icon: <TypeScriptIcon /> },
          { name: "React", icon: <ReactIcon /> },
          { name: "CSS", icon: <CssIcon /> },
          { name: "Webpack", icon: <WebpackIcon /> },
        ]}
      >
        A deeper dive in applying the theming guidelines provided by Ant
        Design’s documentation in an actual application.
      </MiniBoxProject>
      <MiniBoxProject
        project={{
          name: "A proposal for clearer code reviews",
          type: "Thoughts",
          date: "November 27, 2019",
          link:
            "https://medium.com/@syllaband/a-proposal-for-clearer-code-review-ac3ebbcc0ec6",
        }}
        techList={[{ name: "Git", icon: <GitIcon /> }]}
      >
        An attempt to build a loose feedback framework from personal experience,
        both as a reviewer and a creator of pull requests.
      </MiniBoxProject>
      <MiniBoxProject
        project={{
          name: "Types of TypeScript typings",
          type: "Guide",
          date: "September 9, 2019",
          link:
            "https://medium.com/@syllaband/types-of-typescript-typings-303539f3a57b",
        }}
        techList={[
          { name: "TypeScript", icon: <TypeScriptIcon /> },
          { name: "React", icon: <ReactIcon /> },
        ]}
      >
        A brief overview of the different approaches TypeScript offers to make
        our React code type safe.
      </MiniBoxProject>
      <MiniBoxProject
        project={{
          name: "A localization toolbox with React's context API",
          type: "Guide",
          date: "June 6, 2018",
          link:
            "https://itnext.io/using-reacts-context-api-to-provide-a-localization-toolbox-for-your-components-48915f04bb54",
        }}
        techList={[
          { name: "JavaScript", icon: <JavaScriptIcon /> },
          { name: "React", icon: <ReactIcon /> },
        ]}
      >
        A guide on how to format time and numbers, how to make it relevant to a
        specific locale, and how to make it all easy with React’s context API.
      </MiniBoxProject>
    </Box>
  )
}

export default BoxProjects
