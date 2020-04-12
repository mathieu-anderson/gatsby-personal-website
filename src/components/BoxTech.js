import React from "react"
import Box from "./Box"
import Pill from "./Pill"
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
import { MoodContext } from "../hooks/useMoodContext"

const qualifiers = {
  enthusiastic: {
    whimsyClassName: "enthusiastic",
    whimsyText: "Exciting stuff!",
  },
  curious: {
    whimsyClassName: "curious",
    whimsyText: "A fave of yours?",
  },
  openminded: {
    whimsyClassName: "openminded",
    whimsyText: "Open to more",
  },
}

const initialQualifier = {
  whimsyClassName: "",
  whimsyText: "Most used tools",
}

const BoxTech = () => {
  const { mood } = React.useContext(MoodContext)

  return (
    <Box
      className="Section-2"
      initialQualifier={initialQualifier}
      qualifiers={qualifiers}
      currentMood={mood}
    >
      <div className="pills-container">
        <Pill
          name="JavaScript"
          icon={<JavaScriptIcon />}
          details={{
            since: "2016",
            frequency: "every day",
            like:
              "the flexibility to be used in the front-end and the back-end, the speed and ease of development",
          }}
        />
        <Pill
          name="TypeScript"
          icon={<TypeScriptIcon />}
          details={{
            since: "2019",
            frequency: "every day",
            like:
              "the safety and productivity boost it brings to large and complex projects",
          }}
        />
        <Pill
          name="React"
          icon={<ReactIcon />}
          details={{
            since: "2016",
            frequency: "every day",
            like:
              "the composability paradigm and the continued improvements and innovation brought to the API (hooks <3)",
          }}
        />
        <Pill
          name="Redux"
          icon={<ReduxIcon />}
          details={{
            since: "2016",
            frequency: "every day (at work)",
            like:
              "the core simplicity of the design and the power it offers (to be used wisely!)",
          }}
        />
        <Pill
          name="CSS"
          icon={<CssIcon />}
          details={{
            since: "2016",
            frequency: "every day",
            like: "the potential to create anything with enough knowledge",
          }}
        />
        <Pill
          name="Sass"
          icon={<SassIcon />}
          details={{
            since: "2016",
            frequency: "only in side projects",
            like:
              "the flexibility to be used in the front-end and the back-end, the speed and ease of development",
          }}
        />
        <Pill
          name="Node"
          icon={<NodeIcon />}
          details={{
            since: "2016",
            frequency:
              "every day (as JS runtime) / side projects (as back-end)",
            like:
              "the NPM package ecosystem and the empowering ability to write JavaScript in the back-end",
          }}
        />
        <Pill
          name="Webpack"
          icon={<WebpackIcon />}
          details={{
            since: "2016",
            frequency: "every day (as bundler of all my projects)",
            like:
              "the amount of control it gives over a build and the excellent developer experience it enables",
          }}
        />
        <Pill
          name="Docker"
          icon={<DockerIcon />}
          details={{
            since: "2017",
            frequency: "every day (as part of the dev and CI environment)",
            like:
              "the ability to eliminate local setup issues by spinning everything up in containers",
          }}
        />
        <Pill
          name="Git"
          icon={<GitIcon />}
          details={{
            since: "2016",
            frequency: "every day",
            like:
              "the security, debugging and collaboration potential it offers",
          }}
        />
      </div>
    </Box>
  )
}

export default BoxTech
