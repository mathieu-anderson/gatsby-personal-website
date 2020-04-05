import React from "react"

const useWhimsy = () => {
  const qualifiers = [
    {
      index: 0,
      adjectiveClassName: "curious",
      adjective: "a curious",
    },
    {
      index: 1,
      adjectiveClassName: "enthusiastic",
      adjective: "an enthusiastic",
    },
    {
      index: 2,
      adjectiveClassName: "openminded",
      adjective: "an open-minded",
    },
  ]

  const initialQualifier = {
    index: null,
    adjectiveClassName: "",
    adjective: "a",
  }

  const getNextQualifiers = previousQualifier => {
    if (
      previousQualifier === null ||
      previousQualifier.index === qualifiers.length - 1
    ) {
      return qualifiers[0]
    } else return qualifiers[previousQualifier.index + 1]
  }

  // Only activate the nudging wiggle until a user has clicked the title
  const [qualifier, setQualifier] = React.useState({
    ...initialQualifier,
    adjectiveClassName: "nudge",
  })
  const [previousQualifier, setPreviousQualifier] = React.useState(null)

  const activateWhimsy = () => {
    setQualifier(getNextQualifiers(previousQualifier))
  }

  const deactivateWhimsy = () => {
    setPreviousQualifier(qualifier)
    setQualifier(initialQualifier)
  }

  // Need to figure out how to make this one work!
  const WhimsyContainer = ({ children }) => {
    return (
      <button
        className={adjectiveClassName}
        onMouseDown={activateWhimsy}
        onMouseUp={deactivateWhimsy}
      >
        {children}
      </button>
    )
  }

  const { adjectiveClassName, adjective } = qualifier

  return {
    WhimsyContainer,
    activateWhimsy,
    deactivateWhimsy,
    adjective,
    adjectiveClassName,
  }
}

export default useWhimsy
