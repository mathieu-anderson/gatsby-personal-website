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

const moods = {
  enthusiastic: {
    moodClassName: "enthusiastic",
    moodText: "Getting it done!",
  },
  curious: {
    moodClassName: "curious",
    moodText: "Who will be next?",
  },
  openminded: {
    moodClassName: "openminded",
    moodText: "Always learning",
  },
}

const initialMood = {
  moodClassName: "",
  moodText: "My teams",
}

const BoxJobs = () => {
  const { mood } = React.useContext(MoodContext)

  return (
    <Box
      className="Section-3"
      initialMood={initialMood}
      moods={moods}
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
            <em>Who?</em> A dynamic growth startup selling a b2b promotion
            engine solution
          </li>
          <li>
            <em>What?</em> A twofold product: a webapp to create flexible
            rule-based marketing campaigns, and a powerful API to evaluate
            customer sessions according to those rules.
          </li>
          <li>
            <em>My role:</em> Building and maintaining front-end features in
            collaboration with the UX/UI team and the back-end team
            (geolocation, rule builder, UI redesign), optimizing build tools and
            DX (cut build time in half), addressing tech debt and managing
            dependencies.
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
            <em>Who?</em> A mature startup providing an SEO service to thousands
            of users daily as a freemium model.
          </li>
          <li>
            <em>What?</em> Offer a limited free review for any url entered by
            the user. Subscriptions open access to a keyword tool, PDF
            generation, competitor tracking and analytics. Deeply committed to
            high availability and continuous integration / deployment through
            containerized micro-services, with multiple deployment daily
          </li>
          <li>
            <em>My role:</em> Built new features from back-end to front-end (PDF
            generation, Facebook API metrics gathering, mailing service),
            addressed maintenance issues (legacy PHP codebase), participated in
            first-response effort during crisis
          </li>
        </ul>
      </Job>
    </Box>
  )
}

export default BoxJobs
