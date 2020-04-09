import React from "react"
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
  CircleCiIcon,
} from "../components/Icons"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Box from "../components/Box"
import Pill from "../components/Pill"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box className="Section-1" heading="What I do">
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
      </p>{" "}
    </Box>
    <Box className="Section-2" heading="How I get it done">
      <div className="pills-container">
        <Pill
          name="JavaScript"
          icon={<JavaScriptIcon />}
          details={{
            since: "2016",
            frequency: "every day",
            like:
              "the flexibility to be used in the front-end and the back-end, the speed and ease of development.",
          }}
        />
        <Pill
          name="TypeScript"
          icon={<TypeScriptIcon />}
          details={{
            since: "2019",
            frequency: "every day",
            like:
              "the safety and productivity boost it brings to large and complex projects.",
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
            frequency: "every day",
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
            like: `the potential to create anything with enough knowledge (like ${(
              <a href="https://youtu.be/wlfmSJIyg_E">Mario Kart</a>
            )})`,
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
            frequency: "only in side projects",
            like:
              "the package ecosystem around NPM and the ability to write JS / TS in the back-end for truly isomorphic apps",
          }}
        />
        <Pill
          name="Webpack"
          icon={<WebpackIcon />}
          details={{
            since: "2016",
            frequency: "every day",
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
              "the security, debugging and collaboration potential it offers.",
          }}
        />
      </div>
    </Box>
    <Box className="Section-3" heading="Where I did it">
      Indeed it is
    </Box>
    <Box className="Section-4" heading="On the side">
      Indeed it is
    </Box>
  </Layout>
)

export default IndexPage
