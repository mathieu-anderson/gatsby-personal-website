import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import BoxGreetings from "../components/BoxGreetings"
import BoxTech from "../components/BoxTech"
import BoxJobs from "../components/BoxJobs"
import BoxProjects from "../components/BoxProjects"
import { MoodProvider } from "../hooks/useMoodContext"

const IndexPage = () => {
  return (
    <MoodProvider>
      <Layout>
        <SEO title="Mathieu Anderson is a web dev" />
        <BoxGreetings />
        <BoxTech />
        <BoxJobs />
      </Layout>
    </MoodProvider>
  )
}

export default IndexPage
