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
import Emphasis from "./Emphasis"

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
        <div>
          <em>Who?</em> A dynamic growth SAAS startup selling a holistic
          <Emphasis> promotion engine</Emphasis> solution.
        </div>
        <div>
          <em>What?</em> A twofold product: a webapp to create flexible{" "}
          <Emphasis>rule-based marketing campaigns</Emphasis>, and a powerful
          API to evaluate customer sessions according to those rules.
        </div>
        <div>
          <em>My role:</em> Building and
          <Emphasis> owning front-end features</Emphasis> for our web app, in
          close collaboration with front-end teammates, the UX/UI team and the
          back-end team (geolocation, rule builder, UI redesign).{" "}
          <Emphasis>Optimizing build tools</Emphasis> and DX (cut Webpack build
          time and bundle size in half, getting adhesion for code standards).
          Led a major <Emphasis>tech debt effort </Emphasis>
          (refactoring 5 years old React code, updating critical packages).
        </div>
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
        <div>
          <em>Who?</em> A mature startup providing an{" "}
          <Emphasis>SEO service</Emphasis> to thousands of users daily as a
          freemium model. Committed to <Emphasis>high availability</Emphasis>{" "}
          and continuous deployment through containerized micro-services (Node /
          React), and multiple daily deploys.
        </div>
        <div>
          <em>What?</em> WooRank offers an <Emphasis>SEO review</Emphasis>{" "}
          service for any url entered by the user. Features: basic SEO checks,
          keyword tool, PDF generation, competitor tracking, analytics.
        </div>
        <div>
          <em>My role:</em> Built new features{" "}
          <Emphasis>from back-end to front-end</Emphasis> (Node and React) (PDF
          generation, Facebook API metrics, mailing service). Proposed and{" "}
          <Emphasis>gathered adhesion</Emphasis> for technical solutions to our
          user's issues (implemented styles theming for PDFs). Participated in{" "}
          <Emphasis>first-response</Emphasis> effort during crisis.
        </div>
      </Job>
    </Box>
  )
}

export default BoxJobs
