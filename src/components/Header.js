import React from "react"
import { GithubIcon, MediumIcon, TwitterIcon, LinkedinIcon } from "./Icons"
import MoodContainer from "./MoodContainer"

import "./Header.css"
import { MoodContext } from "../hooks/useMoodContext"

const qualifiers = [
  {
    index: 0,
    whimsyClassName: "enthusiastic",
    whimsyText: "Mathieu Anderson is an enthusiastic web dev",
  },
  {
    index: 1,
    whimsyClassName: "curious",
    whimsyText: "Mathieu Anderson is a curious web dev",
  },
  {
    index: 2,
    whimsyClassName: "openminded",
    whimsyText: "Mathieu Anderson is an open-minded web dev",
  },
]

const initialQualifier = {
  index: null,
  whimsyClassName: "",
  whimsyText: "Mathieu Anderson is a web dev",
}

const Header = () => {
  const { mood, handleSetMood } = React.useContext(MoodContext)

  return (
    <>
      <header>
        <h1 className="header-title">
          <MoodContainer
            initialQualifier={initialQualifier}
            qualifiers={qualifiers}
            currentMood={mood}
          />
        </h1>
      </header>
      <div className="header-buttons">
        <div className="header-social">
          <GithubIcon />
          <MediumIcon />
          <TwitterIcon />
          <LinkedinIcon />
        </div>
        <div className="header-mood">
          <button
            className={`${mood === null && "default-active"}`}
            onClick={() => handleSetMood("default")}
          >
            Default
          </button>
          <button
            className={`${mood === 0 && "enthusiastic-active"}`}
            onClick={() => handleSetMood("enthusiastic")}
          >
            Enthusiastic
          </button>
          <button
            className={`${mood === 1 && "curious-active"}`}
            onClick={() => handleSetMood("curious")}
          >
            Curious
          </button>
          <button
            className={`${mood === 2 && "openminded-active"}`}
            onClick={() => handleSetMood("openminded")}
          >
            Open-minded
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
