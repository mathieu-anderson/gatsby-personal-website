import React from "react"
import { GithubIcon, MediumIcon, TwitterIcon, LinkedinIcon } from "./Icons"
import MoodContainer from "./MoodContainer"

import "./Header.css"
import { MoodContext } from "../hooks/useMoodContext"

const qualifiers = {
  enthusiastic: {
    whimsyClassName: "enthusiastic",
    whimsyText: "Mathieu Anderson is an enthusiastic web dev",
  },
  curious: {
    whimsyClassName: "curious",
    whimsyText: "Mathieu Anderson is a curious web dev",
  },
  openminded: {
    whimsyClassName: "openminded",
    whimsyText: "Mathieu Anderson is an open-minded web dev",
  },
}

const initialQualifier = {
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
          <GithubIcon link="https://github.com/mathieu-anderson" />
          <MediumIcon />
          <TwitterIcon />
          <LinkedinIcon />
        </div>
        <div className="header-mood">
          <button
            title="Default"
            className={`default-mood ${mood === null && "default-active"}`}
            onClick={() => handleSetMood("default")}
          >
            Default
          </button>
          <button
            title="Enthusiastic"
            className={`enthusiastic-mood ${mood === "enthusiastic" &&
              "enthusiastic-active"}`}
            onClick={() => handleSetMood("enthusiastic")}
          >
            Enthusiastic
          </button>
          <button
            title="Curious"
            className={`curious-mood ${mood === "curious" && "curious-active"}`}
            onClick={() => handleSetMood("curious")}
          >
            Curious
          </button>
          <button
            title="Openminded"
            className={`openminded-mood ${mood === "openminded" &&
              "openminded-active"}`}
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
