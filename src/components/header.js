import React from "react"
import { GithubIcon, MediumIcon, TwitterIcon, LinkedinIcon } from "./Icons"

import "./Header.css"

const Header = () => (
  <header className="header-parent">
    <h1>Mathieu Anderson is a web dev</h1>
    <div className="header-social">
      <GithubIcon />
      <MediumIcon />
      <TwitterIcon />
      <LinkedinIcon />
    </div>
  </header>
)

export default Header
