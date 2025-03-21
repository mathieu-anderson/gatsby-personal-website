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
  moodText: "Writing & talking",
}

export const ThemingArticle = (
  <MiniBoxProject
    project={{
      name: "Theming Ant Design : a detailed step by step basic guide",
      type: "Guide",
      date: "March 23, 2020",
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
    A deeper dive in applying the theming guidelines provided by Ant Design’s
    documentation in an actual application.
  </MiniBoxProject>
)
export const ReviewArticle = (
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
)
export const TypesArticle = (
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
    A brief overview of the different approaches TypeScript offers to make our
    React code type safe.
  </MiniBoxProject>
)
export const LocalizationArticle = (
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
)
export const DxIsUxArticle = (
  <MiniBoxProject
    project={{
      name: "DX is UX",
      type: "Talk",
      date: "June 3, 2022",
      link: "https://2022.jsconfbp.com/speakers/mathieu-anderson",
    }}
    techList={[{ name: "JavaScript", icon: <JavaScriptIcon /> }]}
  >
    Talk at JSConf Budapest 2022 about improving your developer experience by
    adopting user experience principles.
    <ul style={{ marginTop: "calc(1.45rem / 2)" }}>
      <li>
        <a href="https://youtu.be/s_9MnfNxqQs">See the talk</a> on JSConf's
        YouTube channel.
      </li>
      <li>
        <a href="https://dx-is-ux.matand.dev/">Go to the companion website</a>{" "}
        with resources and the slides deck.
      </li>
    </ul>
  </MiniBoxProject>
)
export const FormsArticle = (
  <MiniBoxProject
    project={{
      name: "TypeScript, react-hook-form, zod: blissful forms",
      type: "Guide",
      date: "August 8, 2023",
      link: "https://aiven.io/blog/typescript-react-hook-form-zod",
    }}
    techList={[
      { name: "TypeScript", icon: <TypeScriptIcon /> },
      { name: "React", icon: <ReactIcon /> },
    ]}
  >
    A walkthrough of the technical choices the{" "}
    <a href="https://github.com/Aiven-Open/klaw">Klaw</a> project team has made
    to create reliable, composable and delightful web forms.
  </MiniBoxProject>
)
export const OsDevTalk = (
  <MiniBoxProject
    project={{
      name: "Being an open source React developer",
      type: "Talk",
      date: "October 25, 2023",
      link:
        "https://www.linkedin.com/posts/gitnation_hey-berlin-folks-mark-the-dateoctober-activity-7120447484878868480-XAGZ?utm_source=share&utm_medium=member_desktop",
    }}
    techList={[
      { name: "Git", icon: <GitIcon /> },
      { name: "React", icon: <ReactIcon /> },
    ]}
  >
    A talk about how, where and why to contribute to open source projects as a
    developer who likes using React.{" "}
    <ul style={{ marginTop: "calc(1.45rem / 2)" }}>
      <li>
        <a href="react-os-dev.pdf" download>
          Download the slides (pdf).
        </a>
      </li>
    </ul>
  </MiniBoxProject>
)

const BoxProjects = () => {
  const { mood } = React.useContext(MoodContext)

  return (
    <Box
      className="Section-4"
      initialMood={initialMood}
      moods={moods}
      currentMood={mood}
    >
      {OsDevTalk}
      {FormsArticle}
      {DxIsUxArticle}
      {ThemingArticle}
      {ReviewArticle}
      {TypesArticle}
      {LocalizationArticle}
    </Box>
  )
}

export default BoxProjects
