import React from "react"
import MiniPill from "./MiniPill"

import "./Job.css"
import HighlightContainer from "./HighlightContainer"

const Job = ({ job, techList, children }) => {
  return (
    <HighlightContainer>
      <h3>{job.link}</h3>
      <p class="job-dates">{job.dates}</p>
      <p class="job-role">{job.role}</p>
      <div class="job-tech">
        {techList.map(({ icon, name }) => (
          <MiniPill icon={icon} name={name} />
        ))}
      </div>
      <div className="job-description">{children}</div>
    </HighlightContainer>
  )
}

export default Job
