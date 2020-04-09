/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import "./Layout.css"

const Layout = ({ children }) => {
  return (
    <div
      style={{
        margin: `1rem auto`,
        maxWidth: 1200,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <Header />
      <main className="layout-grid">{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
