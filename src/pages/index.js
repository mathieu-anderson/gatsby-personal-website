import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Box from "../components/Box"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box className="Section-1" heading="What I do">
      <p>
        I am a <b>front-end</b> specialist. I love being part of
        cross-functional teams and being the <b>logical glue</b>
        between the back-end devs and the designers.
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
      Indeed it is
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
