import React from "react"
import { GithubIcon, MediumIcon, TwitterIcon, LinkedinIcon } from "./Icons"
import useWhimsy from "../hooks/useWhimsy"

import "./Header.css"
import "../hooks/useWhimsy.css"
import { useScrollPosition } from "../hooks/useScrollPosition"

const Header = () => {
  const {
    activateWhimsy,
    deactivateWhimsy,
    adjective,
    adjectiveClassName,
  } = useWhimsy()
  const [y, setY] = React.useState(null)
  useScrollPosition(({ currPos }) => {
    setY(currPos.y)
  })
  const hasScrolled = y < 0
  return (
    <header
      className={`header-parent ${hasScrolled ? "header-parent-mini" : ""}`}
    >
      <h1 className={`${hasScrolled ? "header-title-mini" : "header-title"}`}>
        <button
          className={adjectiveClassName}
          onMouseDown={() => {
            activateWhimsy()
          }}
          onTouchStart={() => {
            activateWhimsy()
          }}
          onMouseUp={() => {
            deactivateWhimsy()
          }}
          onTouchEnd={() => {
            deactivateWhimsy()
          }}
        >
          {`Mathieu Anderson is ${adjective} web dev`}
          {adjectiveClassName === "curious" && (
            <span className="question-mark">?</span>
          )}
        </button>
      </h1>
      {(adjectiveClassName === "" ||
        adjectiveClassName === "nudge" ||
        hasScrolled) && (
        <div className="header-social">
          <GithubIcon />
          <MediumIcon />
          <TwitterIcon />
          <LinkedinIcon />
        </div>
      )}
    </header>
  )
}

export default Header
