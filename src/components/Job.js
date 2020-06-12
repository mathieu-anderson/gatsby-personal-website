import React from "react"
import MiniPill from "./MiniPill"

import "./Job.css"
import HighlightContainer from "./HighlightContainer"

const Job = ({ job, techList, children }) => {
  return (
    <HighlightContainer>
      <h3>{job.link}</h3>
      <p className="job-dates">{job.dates}</p>
      <p className="job-role">{job.role}</p>
      <div className="job-tech">
        {techList.map(({ icon, name }) => (
          <MiniPill key={`${icon}-${name}`} icon={icon} name={name} />
        ))}
      </div>
      <div className="job-description">{children}</div>
    </HighlightContainer>
  )
}

export default Job
