import React from "react"
import Box from "./Box"
import {
  TypeScriptIcon,
  ReactIcon,
  ReduxIcon,
  WebpackIcon,
  GitIcon,
  DockerIcon,
  JavaScriptIcon,
  SassIcon,
  NodeIcon,
  CssIcon,
} from "../components/Icons"
import Job from "../components/Job"
import { MoodContext } from "../hooks/useMoodContext"

const qualifiers = [
  {
    index: 0,
    whimsyClassName: "enthusiastic",
    whimsyText: "Getting it done!",
  },
  {
    index: 1,
    whimsyClassName: "curious",
    whimsyText: "Who will be next?",
  },
  {
    index: 2,
    whimsyClassName: "openminded",
    whimsyText: "Always learning",
  },
]

const initialQualifier = {
  index: null,
  whimsyClassName: "",
  whimsyText: "My teams",
}

const BoxJobs = () => {
  const { mood } = React.useContext(MoodContext)

  return (
    <Box
      className="Section-3"
      initialQualifier={initialQualifier}
      qualifiers={qualifiers}
      currentMood={mood}
    >
      <Job
        job={{
          link: (
            <a title="Talon.one" href="https://talon.one/">
              Talon.One
            </a>
          ),
          dates: "January 2019 - Now",
          role: "Front-end developer",
        }}
        techList={[
          { name: "TypeScript", icon: <TypeScriptIcon /> },
          { name: "React", icon: <ReactIcon /> },
          { name: "Redux", icon: <ReduxIcon /> },
          { name: "CSS", icon: <CssIcon /> },
          { name: "Webpack", icon: <WebpackIcon /> },
          // { name: "Go", icon: <GoIcon /> },
          { name: "Git", icon: <GitIcon /> },
          { name: "Docker", icon: <DockerIcon /> },
        ]}
      >
        <ul>
          <li>
            A dynamic growth startup selling a b2b promotion engine solution
          </li>
          <li>
            Sophisticated tech around Talang, a DSL to build and evaluate
            user-defined rules safely and fast
          </li>
          <li>
            Building front-end features in collaboration with the UX/UI team and
            the back-end team (geolocation, UI library), addressing tech debt,
            optimizing build tools and DX (cut build time in half), learning to
            mentor team members
          </li>
        </ul>
      </Job>
      <Job
        job={{
          link: (
            <a title="WooRank" href="https://www.woorank.com/">
              WooRank
            </a>
          ),
          dates: "July 2017 - December 2018",
          role: "Full-stack developer",
        }}
        techList={[
          { name: "JavaScript", icon: <JavaScriptIcon /> },
          { name: "React", icon: <ReactIcon /> },
          { name: "Redux", icon: <ReduxIcon /> },
          { name: "Sass", icon: <SassIcon /> },
          { name: "Webpack", icon: <WebpackIcon /> },
          { name: "Node", icon: <NodeIcon /> },
          { name: "Git", icon: <GitIcon /> },
          { name: "Docker", icon: <DockerIcon /> },
        ]}
      >
        <ul>
          <li>
            A mature startup providing an SEO service to thousands of users
            daily
          </li>
          <li>
            Deeply committed to high availability and continuous integration /
            deployment through containerized micro-services, with multiple
            deployment daily
          </li>
          <li>
            Built new features from back-end to front-end (PDF generation,
            Facebook API metrics gathering, mailing service), addressed
            maintenance issues (legacy PHP codebase), participated in
            first-response effort during crisis
          </li>
        </ul>
      </Job>
    </Box>
  )
}

export default BoxJobs
