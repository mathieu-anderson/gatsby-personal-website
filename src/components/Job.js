import React from "react"
import MiniPill from "./MiniPill"

import "./Job.css"

const Job = ({ job, techList, children }) => {
  return (
    <div class="job-container">
      <h3>{job.link}</h3>
      <p class="job-dates">{job.dates}</p>
      <p class="job-role">{job.role}</p>
      <p class="job-tech">
        {techList.map(({ icon, name }) => (
          <MiniPill icon={icon} name={name} />
        ))}
      </p>
      <p className="job-description">{children}</p>
    </div>
  )
}

export default Job
