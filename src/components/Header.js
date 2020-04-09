import React from "react"
import { GithubIcon, MediumIcon, TwitterIcon, LinkedinIcon } from "./Icons"
import useWhimsy from "../hooks/useWhimsy"

import "./Header.css"
import "../hooks/useWhimsy.css"

const Header = () => {
  const {
    activateWhimsy,
    deactivateWhimsy,
    adjective,
    adjectiveClassName,
  } = useWhimsy()

  return (
    <header className="header-parent">
      <h1 className={`header-title`}>
        <button
          className={adjectiveClassName}
          onMouseDown={() => {
            activateWhimsy()
          }}
          onMouseUp={() => {
            deactivateWhimsy()
          }}
        >
          {`Mathieu Anderson is ${adjective} web dev`}
          {adjectiveClassName === "curious" && (
            <span className="question-mark">?</span>
          )}
        </button>
      </h1>
      <div className="header-social">
        <GithubIcon />
        <MediumIcon />
        <TwitterIcon />
        <LinkedinIcon />
      </div>
    </header>
  )
}

export default Header
