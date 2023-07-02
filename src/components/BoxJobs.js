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
  ViteIcon,
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
            <a title="Aiven" href="https://aiven.io/">
              Aiven
            </a>
          ),
          dates: "December 2022 - Now",
          role: "Senior front-end engineer",
        }}
        techList={[
          { name: "TypeScript", icon: <TypeScriptIcon /> },
          { name: "React", icon: <ReactIcon /> },
          { name: "CSS", icon: <CssIcon /> },
          { name: "Vite", icon: <ViteIcon /> },
          { name: "Git", icon: <GitIcon /> },
        ]}
      >
        <ul>
          <li>
            <em>Who?</em> A unicorn startup offering a{" "}
            <Emphasis>fully managed, open source cloud data platform</Emphasis>.
          </li>
          <li>
            <em>What?</em> Part of the commitment of Aiven to open source
            software is the{" "}
            <Emphasis>
              <a href="https://aiven.io/open-source-program-office">
                Open source program office
              </a>
            </Emphasis>{" "}
            (OSPO), which is a team of Aiven employees working full-time on
            maintaining the projects offered as managed services.
          </li>
          <li>
            <em>My role:</em> As part of the OSPO, I joined the{" "}
            <a href="https://github.com/aiven/klaw">Klaw</a> project's team.
            Currently focusing on <Emphasis>migrating the front-end</Emphasis>{" "}
            from Angular 1 to React. This includes:{" "}
            <Emphasis>making architectural decision</Emphasis> with high
            emphasis on maintainability and accessibility, collaborating closely
            with backend engineers to{" "}
            <Emphasis>improve the API design</Emphasis> of the project.
          </li>
        </ul>
      </Job>
      <Job
        job={{
          link: (
            <a title="Talon.one" href="https://talon.one/">
              Talon.One
            </a>
          ),
          dates: "January 2019 - November 2022",
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
            <em>Who?</em> A dynamic growth SAAS startup selling a holistic
            <Emphasis> promotion engine</Emphasis> solution.
          </li>
          <li>
            <em>What?</em> Talon.One is a twofold product: a webapp to create
            flexible <Emphasis>rule-based marketing campaigns</Emphasis>, and a
            powerful API to evaluate customer sessions according to those rules.
          </li>
          <li>
            <em>My role:</em>{" "}
            <Emphasis>Building and owning front-end features</Emphasis> for our
            web app, in close collaboration with front-end teammates, the UX/UI
            team and the back-end team (geolocation, rule builder, UI redesign).{" "}
            <Emphasis>Optimizing build tools</Emphasis> and{" "}
            <Emphasis>addressing tech debt</Emphasis> (cut Webpack build time in
            half, enforcing code standards, updating legacy React codebase). Led
            a major <Emphasis>redesign effort</Emphasis> of the product
            (implementing specs by creating maintainable, reusable components).
            Grew into a <Emphasis>leadership role</Emphasis> (mentoring new
            hires, representing engineering concern in product meetings,
            planning and executing / delegating necessary tasks).
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
            <em>Who?</em> A mature startup providing an{" "}
            <Emphasis>SEO service</Emphasis> to thousands of users daily as a
            freemium model.
          </li>
          <li>
            <em>What?</em> WooRank offers a limited{" "}
            <Emphasis>free review</Emphasis> for any url entered by the user.
            Subscribing to the service opens access to a keyword tool, PDF
            generation, competitor tracking, analytics and more. Deeply
            committed to <Emphasis>high availability</Emphasis> and continuous
            integration / deployment through containerized micro-services (Node
            / React), and multiple daily deploys.
          </li>
          <li>
            <em>My role:</em> Built new features{" "}
            <Emphasis>from back-end to front-end</Emphasis> (PDF generation,
            Facebook API metrics gathering, mailing service). Proposed solutions
            to solve our user's issues and{" "}
            <Emphasis>gathered technical consensus</Emphasis> (styles theming
            for PDFs). Addressed maintenance issues (legacy PHP codebase).
            Participated in <Emphasis>first-response</Emphasis> effort during
            crisis.
          </li>
        </ul>
      </Job>
    </Box>
  )
}

export default BoxJobs
