import React from "react"
import useWhimsy from "../hooks/useWhimsy"

import "./Box.css"
import "../hooks/useWhimsy.css"

const Box = ({ children, heading, className }) => {
  const { activateWhimsy, deactivateWhimsy, adjectiveClassName } = useWhimsy()

  return (
    <section className={`${className} box-container`}>
      <h2 className="box-heading">
        <button
          className={adjectiveClassName}
          onMouseDown={() => {
            activateWhimsy()
          }}
          onMouseUp={() => {
            deactivateWhimsy()
          }}
        >
          {heading}
        </button>
      </h2>
      {children}
    </section>
  )
}

export default Box
