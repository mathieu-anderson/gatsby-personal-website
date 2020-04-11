import React from "react"
import { WhimsyContainer } from "../hooks/useWhimsy"

import "./Box.css"

const Box = ({ children, qualifiers, initialQualifier, className }) => {
  return (
    <section className={`${className} box-container`}>
      <h2 className="box-heading">
        <WhimsyContainer
          qualifiers={qualifiers}
          initialQualifier={initialQualifier}
        />
      </h2>
      {children}
    </section>
  )
}

export default Box
