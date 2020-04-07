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

import Layout from "../components/layout"
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
        <Pill name="JavaScript" icon={<JavaScriptIcon />} />
        <Pill name="TypeScript" icon={<TypeScriptIcon />} />
        <Pill name="React" icon={<ReactIcon />} />
        <Pill name="Redux" icon={<ReduxIcon />} />
        <Pill name="CSS" icon={<CssIcon />} />
        <Pill name="Sass" icon={<SassIcon />} />
        <Pill name="Node" icon={<NodeIcon />} />
        <Pill name="Webpack" icon={<WebpackIcon />} />
        <Pill name="Docker" icon={<DockerIcon />} />
        <Pill name="Git" icon={<GitIcon />} />
        <Pill name="CircleCi" icon={<CircleCiIcon />} />
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
