import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import BoxGreetings from "../components/BoxGreetings"
import BoxTech from "../components/BoxTech"
import BoxJobs from "../components/BoxJobs"
import BoxSideProjects from "../components/BoxSideProjects"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Mathieu Anderson is a web dev" />
      <div className="layout-subgrid-left">
        <BoxGreetings />
        <BoxJobs />
      </div>
      <div className="layout-subgrid-right">
        <BoxTech />
        <BoxSideProjects />
      </div>
    </Layout>
  )
}

export default IndexPage
