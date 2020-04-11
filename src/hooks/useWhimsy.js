import React from "react"
import "./useWhimsy.css"

const useWhimsy = (qualifiers, initialQualifier) => {
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
    whimsyClassName: "nudge",
  })
  const [previousQualifier, setPreviousQualifier] = React.useState(null)

  const activateWhimsy = () => {
    setQualifier(getNextQualifiers(previousQualifier))
  }

  const deactivateWhimsy = () => {
    setPreviousQualifier(qualifier)
    setQualifier(initialQualifier)
  }

  const { whimsyClassName, whimsyText } = qualifier

  return {
    WhimsyContainer,
    activateWhimsy,
    deactivateWhimsy,
    whimsyText,
    whimsyClassName,
  }
}

export default useWhimsy

// Need to figure out how to make this one work!
export const WhimsyContainer = ({ children, qualifiers, initialQualifier }) => {
  const {
    whimsyClassName,
    whimsyText,
    activateWhimsy,
    deactivateWhimsy,
  } = useWhimsy(qualifiers, initialQualifier)
  return (
    <button
      className={whimsyClassName}
      onMouseDown={activateWhimsy}
      onMouseUp={deactivateWhimsy}
      onTouchStart={activateWhimsy}
      onTouchEnd={deactivateWhimsy}
    >
      {whimsyText}
    </button>
  )
}
