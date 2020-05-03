import React from "react"
import { GithubIcon } from "./Icons"
import MiniPill from "./MiniPill"
import HighlightContainer from "./HighlightContainer"

import "./MiniBoxProject.css"
import "./MiniPill.css"

const MiniBoxProject = ({ project, techList, children }) => {
  return (
    <HighlightContainer>
      <h3>
        <a href={project.link}>{project.name}</a>
      </h3>

      <div className="project-date">{project.date}</div>
      {project.repo && (
        <div className="project-repo">
          <GithubIcon link={project.repo} />
        </div>
      )}
      <div className="project-tags">
        <div className="project-type">{project.type}</div>
        {techList.map(({ icon, name }, index) => (
          <MiniPill key={`${name}-${index}`} icon={icon} name={name} />
        ))}
      </div>
      <div className="project-description">{children}</div>
    </HighlightContainer>
  )
}

export default MiniBoxProject
