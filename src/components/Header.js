import React from "react"
import { GithubIcon, MediumIcon, TwitterIcon, LinkedinIcon } from "./Icons"
import useWhimsy from "../hooks/useWhimsy"

import "./Header.css"
import "../hooks/useWhimsy.css"
import { useScroll } from "../hooks/useScroll"

const Header = () => {
  const {
    activateWhimsy,
    deactivateWhimsy,
    adjective,
    adjectiveClassName,
  } = useWhimsy()

  const [hasScrolled, setHasScrolled] = React.useState(false)

  const pos = useScroll()
  React.useEffect(() => {
    // If pos.direction is an empty string, we are on first render
    // And apparently window.scrollY does *not* give 0 on first rednder for some reason
    // So we need to erly return here or the Header behaves unpredicably
    if (pos.direction === "") {
      return
    }
    // Because shrinking and growing the header actual dudges up the scroll values
    // We need to implement a timeout to avoid flickering
    // There MUST be a better solution
    if (pos.y === 0) {
      setTimeout(() => {
        setHasScrolled(false)
      }, 150)
      return
    }
    if (pos.y > 0) {
      setTimeout(() => {
        setHasScrolled(true)
      }, 150)
      return
    }
    return
  }, [pos.y])

  return (
    <header
      className={`header-parent ${
        hasScrolled ? "header-parent-mini" : "header-parent-default"
      }`}
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
