import React from "react"
import { GithubIcon, MediumIcon, TwitterIcon, LinkedinIcon } from "./Icons"

import "./Header.css"

const qualifiers = [
  { index: 0, adjectiveClassName: "curious", adjective: "a curious" },
  {
    index: 1,
    adjectiveClassName: "enthusiastic",
    adjective: "an enthusiastic",
  },
  { index: 2, adjectiveClassName: "openminded", adjective: "an open-minded" },
]

const getNextQualifiers = previousQualifier => {
  if (
    previousQualifier === null ||
    previousQualifier.index === qualifiers.length - 1
  ) {
    return qualifiers[0]
  } else return qualifiers[previousQualifier.index + 1]
}

const Header = () => {
  const initialQualifier = {
    index: null,
    className: "",
    adjective: "a",
  }
  const [qualifier, setQualifier] = React.useState(initialQualifier)
  const [previousQualifier, setPreviousQualifier] = React.useState(null)

  const { adjectiveClassName, adjective } = qualifier

  return (
    <header className="header-parent">
      <h1 className={`header-title ${adjectiveClassName}`}>
        {
          //Button inside of h1 for a11y purpose (no event on non-interactive element)
        }
        <button
          onMouseDown={() => {
            setQualifier(getNextQualifiers(previousQualifier))
          }}
          onMouseUp={() => {
            setPreviousQualifier(qualifier)
            setQualifier(initialQualifier)
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
