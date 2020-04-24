import React from "react"
import { GithubIcon, MediumIcon, TwitterIcon, LinkedinIcon } from "./Icons"
import MoodContainer from "./MoodContainer"

import "./Header.css"
import { MoodContext } from "../hooks/useMoodContext"

const moods = {
  enthusiastic: {
    moodClassName: "enthusiastic",
    moodText: "Mathieu Anderson is an enthusiastic web dev",
  },
  curious: {
    moodClassName: "curious",
    moodText: "Mathieu Anderson is a curious web dev",
  },
  openminded: {
    moodClassName: "openminded",
    moodText: "Mathieu Anderson is an open-minded web dev",
  },
}

const initialMood = {
  moodClassName: "",
  moodText: "Mathieu Anderson is a web dev",
}

const Header = () => {
  const { mood, handleSetMood } = React.useContext(MoodContext)

  return (
    <>
      <header>
        <h1 className="header-title">
          <MoodContainer
            initialMood={initialMood}
            moods={moods}
            currentMood={mood}
          />
        </h1>
      </header>
      <nav className="header-buttons">
        <div className="header-social">
          <GithubIcon link="https://github.com/mathieu-anderson" />
          <MediumIcon />
          <TwitterIcon />
          <LinkedinIcon />
        </div>
        <div className="header-mood">
          <button
            title="Default mood"
            className={`default-mood ${mood === null && "default-active"}`}
            onClick={() => handleSetMood("default")}
          >
            Default
          </button>
          <button
            title="Enthusiastic mood"
            className={`enthusiastic-mood ${mood === "enthusiastic" &&
              "enthusiastic-active"}`}
            onClick={() => handleSetMood("enthusiastic")}
          >
            Enthusiastic
          </button>
          <button
            title="Curious mood"
            className={`curious-mood ${mood === "curious" && "curious-active"}`}
            onClick={() => handleSetMood("curious")}
          >
            Curious
          </button>
          <button
            title="Openminded mood"
            className={`openminded-mood ${mood === "openminded" &&
              "openminded-active"}`}
            onClick={() => handleSetMood("openminded")}
          >
            Open-minded
          </button>
        </div>
      </nav>
    </>
  )
}

export default Header
