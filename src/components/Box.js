import React from "react"
import { WhimsyContainer } from "../hooks/useWhimsy"

import "./Box.css"

const Box = ({ children, heading, className }) => {
  return (
    <section className={`${className} box-container`}>
      <h2 className="box-heading">
        <WhimsyContainer>{heading}</WhimsyContainer>
      </h2>
      {children}
    </section>
  )
}

export default Box
