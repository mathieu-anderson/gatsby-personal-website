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
  moodText: "Mathieu Anderson - Front-end Developer",
}

const sun = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 47.5 47.5"
    version="1.1"
    id="svg2"
    className="theme-icon sun"
  >
    <defs id="defs6">
      <clipPath id="clipPath16" clipPathUnits="userSpaceOnUse">
        <path id="path18" d="M 0,38 38,38 38,0 0,0 0,38 Z" />
      </clipPath>
    </defs>
    <g transform="matrix(1.25,0,0,-1.25,0,47.5)" id="g10">
      <g id="g12">
        <g clipPath="url(#clipPath16)" id="g14">
          <g transform="translate(17,35)" id="g20">
            <path
              id="path22"
              d="M 0,0 C 0,0 0,2 2,2 4,2 4,0 4,0 l 0,-2 c 0,0 0,-2 -2,-2 -2,0 -2,2 -2,2 l 0,2 z"
            />
          </g>
          <g transform="translate(35,21)" id="g24">
            <path
              id="path26"
              d="M 0,0 C 0,0 2,0 2,-2 2,-4 0,-4 0,-4 l -2,0 c 0,0 -2,0 -2,2 0,2 2,2 2,2 l 2,0 z"
            />
          </g>
          <g transform="translate(5,21)" id="g28">
            <path
              id="path30"
              d="M 0,0 C 0,0 2,0 2,-2 2,-4 0,-4 0,-4 l -2,0 c 0,0 -2,0 -2,2 0,2 2,2 2,2 l 2,0 z"
            />
          </g>
          <g transform="translate(10.1211,29.7065)" id="g32">
            <path
              id="path34"
              d="m 0,0 c 0,0 1.414,-1.414 0,-2.828 -1.414,-1.414 -2.828,0 -2.828,0 l -1.415,1.414 c 0,0 -1.414,1.414 0,2.829 1.415,1.414 2.829,0 2.829,0 L 0,0 Z"
            />
          </g>
          <g transform="translate(31.1211,8.707)" id="g36">
            <path
              id="path38"
              d="m 0,0 c 0,0 1.414,-1.414 0,-2.828 -1.414,-1.414 -2.828,0 -2.828,0 l -1.414,1.414 c 0,0 -1.414,1.414 0,2.828 1.414,1.414 2.828,0 2.828,0 L 0,0 Z"
            />
          </g>
          <g transform="translate(30.708,26.8789)" id="g40">
            <path
              id="path42"
              d="m 0,0 c 0,0 -1.414,-1.414 -2.828,0 -1.414,1.414 0,2.828 0,2.828 l 1.414,1.414 c 0,0 1.414,1.414 2.828,0 1.414,-1.414 0,-2.828 0,-2.828 L 0,0 Z"
            />
          </g>
          <g transform="translate(9.708,5.8789)" id="g44">
            <path
              id="path46"
              d="m 0,0 c 0,0 -1.414,-1.414 -2.828,0 -1.414,1.414 0,2.828 0,2.828 l 1.414,1.414 c 0,0 1.414,1.414 2.828,0 1.414,-1.414 0,-2.828 0,-2.828 L 0,0 Z"
            />
          </g>
          <g transform="translate(17,5)" id="g48">
            <path
              id="path50"
              d="M 0,0 C 0,0 0,2 2,2 4,2 4,0 4,0 l 0,-2 c 0,0 0,-2 -2,-2 -2,0 -2,2 -2,2 l 0,2 z"
            />
          </g>
          <g transform="translate(29,19)" id="g52">
            <path
              id="path54"
              d="m 0,0 c 0,5.523 -4.478,10 -10,10 -5.523,0 -10,-4.477 -10,-10 0,-5.522 4.477,-10 10,-10 5.522,0 10,4.478 10,10"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
)

const moon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 100 125"
    className="theme-icon moon"
  >
    <path d="M95,50c0,24.7-20.2,44.8-45,44.8c-23.7,0-43.4-18.4-45-41.9c-0.1-1.2,0.6-2.4,1.8-2.9c1.1-0.5,2.5-0.3,3.4,0.6  c5.9,5.9,13.1,9.1,20.3,9.1c16,0,28.9-13,28.9-28.9c0-7.3-3.2-14.5-9.1-20.4c-0.9-0.9-1.1-2.2-0.6-3.3c0.5-1.1,1.7-1.8,2.9-1.8  C76.4,6.6,95,26.3,95,50z" />
  </svg>
)

// Use dark theme as default after 7pm
// Results in a flash of light theme
// Should be fixed by implementing a solution close to
// https://joshwcomeau.com/gatsby/dark-mode/
const getInitialTheme = dateObject => {
  const hours = dateObject.getHours()
  if (hours > 19) {
    return "light"
  } else {
    return "dark"
  }
}

// Switch the values of core css variables
// The lazy man's dark theme
const handleThemeSwitch = (currentTheme, setTheme) => {
  if (currentTheme === "light") {
    document.documentElement.style.setProperty(
      "--black",
      "rgb(247, 247, 247, 0.85)"
    )
    document.documentElement.style.setProperty(
      "--black-light",
      "rgb(247, 247, 247, 0.5)"
    )
    document.documentElement.style.setProperty(
      "--black-smoke",
      "rgb(247, 247, 247, 0.2)"
    )
    document.documentElement.style.setProperty("--white", "rgba(26, 33, 45)")
    document.documentElement.style.setProperty(
      "--enthusiastic-smoke",
      "rgba(225, 119, 1, 0.2)"
    )
    document.documentElement.style.setProperty(
      "--curious-smoke",
      "rgba(16, 166, 116, 0.2)"
    )
    document.documentElement.style.setProperty(
      "--openminded-smoke",
      "rgba(98, 65, 199, 0.2)"
    )
    document.documentElement.style.setProperty(
      "--github-icon",
      "rgb(247, 247, 247, 0.85)"
    )
    setTheme("dark")
  } else {
    document.documentElement.style.setProperty("--black", "rgba(0, 0, 0, 0.8)")
    document.documentElement.style.setProperty(
      "--black-light",
      "rgba(0, 0, 0, 0.65)"
    )
    document.documentElement.style.setProperty(
      "--black-smoke",
      "rgba(0, 0, 0, 0.1)"
    )
    document.documentElement.style.setProperty("--white", "rgb(247, 247, 247)")
    document.documentElement.style.setProperty(
      "--enthusiastic-smoke",
      "rgba(225, 119, 1, 0.1)"
    )
    document.documentElement.style.setProperty(
      "--curious-smoke",
      "rgba(16, 166, 116, 0.1)"
    )
    document.documentElement.style.setProperty(
      "--openminded-smoke",
      "rgba(98, 65, 199, 0.1)"
    )
    document.documentElement.style.setProperty("--github-icon", "#1b1f23")
    setTheme("light")
  }
}

const getThemeIcon = currentTheme => {
  if (currentTheme === undefined) {
    return <svg viewBox="0 0 18 18" className="theme-icon"></svg>
  }
  return currentTheme === "light" ? moon : sun
}

const Header = () => {
  const { mood, handleSetMood } = React.useContext(MoodContext)
  const [currentTheme, setTheme] = React.useState(undefined)

  // Only run on first render to switch layout to appropriate initial theme
  React.useEffect(() => {
    handleThemeSwitch(getInitialTheme(new Date()), setTheme)
  }, [])

  return (
    <>
      <header>
        <a href="https://matand.dev/" className="header-link">
          <h1 className="header-title">
            <MoodContainer
              initialMood={initialMood}
              moods={moods}
              currentMood={mood}
            />
          </h1>
        </a>
      </header>
      <nav className="header-buttons">
        <div className="header-social">
          <GithubIcon link="https://github.com/mathieu-anderson" />
          <MediumIcon />
          <TwitterIcon />
          <LinkedinIcon />
        </div>
        <div>
          mathieu.hj.anderson@gmail.com<div>+336 85 01 45 25</div>
        </div>
      </nav>
    </>
  )
}

export default Header
