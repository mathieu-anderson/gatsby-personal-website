import React from "react"
import { GithubIcon, MediumIcon, TwitterIcon, LinkedinIcon } from "./Icons"
import useWhimsy from "../hooks/useWhimsy"

import "./Header.css"
import "../hooks/useWhimsy.css"

const qualifiers = [
  {
    index: 0,
    whimsyClassName: "enthusiastic",
    whimsyText: "an enthusiastic",
  },
  {
    index: 1,
    whimsyClassName: "curious",
    whimsyText: "a curious",
  },
  {
    index: 2,
    whimsyClassName: "openminded",
    whimsyText: "an open-minded",
  },
]

const initialQualifier = {
  index: null,
  whimsyClassName: "",
  whimsyText: "a",
}

const Header = () => {
  const {
    activateWhimsy,
    deactivateWhimsy,
    whimsyClassName,
    whimsyText,
  } = useWhimsy(qualifiers, initialQualifier)

  return (
    <>
      <header>
        <h1 className="header-title">
          <button
            className={whimsyClassName}
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
            {`Mathieu Anderson is ${whimsyText} web dev`}
            {whimsyClassName === "curious" && (
              <span className="question-mark">?</span>
            )}
          </button>
        </h1>
      </header>
      <div className="header-social">
        <GithubIcon />
        <MediumIcon />
        <TwitterIcon />
        <LinkedinIcon />
      </div>
    </>
  )
}

export default Header
