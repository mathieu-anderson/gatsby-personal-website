import React from "react"
import "./Box.css"

const Box = ({ children, heading, className }) => (
  <section className={`${className} box-container`}>
    <h2 className="box-heading">{heading}</h2>
    {children}
  </section>
)

export default Box
