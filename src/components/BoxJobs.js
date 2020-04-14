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

const qualifiers = {
  enthusiastic: {
    whimsyClassName: "enthusiastic",
    whimsyText: "Getting it done!",
  },
  curious: {
    whimsyClassName: "curious",
    whimsyText: "Who will be next?",
  },
  openminded: {
    whimsyClassName: "openminded",
    whimsyText: "Always learning",
  },
}

const initialQualifier = {
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
            <b>Who?</b> A dynamic growth startup selling a b2b promotion engine
            solution
          </li>
          <li>
            <b>What?</b> A twofold product: a webapp to create flexible
            rule-based marketing campaign, and a powerful API to evaluate
            customer sessions according to those rules.
          </li>
          <li>
            <b>My role: </b>Building and maintaining front-end features in
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
            <b>Who?</b> A mature startup providing an SEO service to thousands
            of users daily as a freemium model.
          </li>
          <li>
            <b>What?</b> Offer a limited free review for any url entered by the
            user. Subscriptions open access to a keyword tool, PDF generation,
            competitor tracking and analytics. Deeply committed to high
            availability and continuous integration / deployment through
            containerized micro-services, with multiple deployment daily
          </li>
          <li>
            <b>My role: </b>Built new features from back-end to front-end (PDF
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
