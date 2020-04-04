import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Box from "../components/Box"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box className="Section-1" heading="The box 1 is here">
      Indeed it is
    </Box>
    <Box className="Section-2" heading="The box 2 is here">
      Indeed it is
    </Box>
    <Box className="Section-3" heading="The box 3 is here">
      Indeed it is
    </Box>
    <Box className="Section-4" heading="The box 4 is here">
      Indeed it is
    </Box>
  </Layout>
)

export default IndexPage
