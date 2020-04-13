import React from "react"
import { GithubIcon } from "./Icons"
import MiniPill from "./MiniPill"
import HighlightContainer from "./HighlightContainer"

import "./MiniBoxProject.css"
import "./MiniPill.css"

const MiniBoxProject = ({ project, techList, children }) => {
  return (
    <HighlightContainer>
      <h4>
        <a href={project.link}>{project.name}</a>
      </h4>

      <div class="project-date">{project.date}</div>
      {project.repo && (
        <div class="project-repo">
          <GithubIcon link={project.repo} />
        </div>
      )}
      <div class="project-tags">
        <div class="project-type">{project.type}</div>
        {techList.map(({ icon, name }) => (
          <MiniPill icon={icon} name={name} />
        ))}
      </div>
      <div className="project-description">{children}</div>
    </HighlightContainer>
  )
}

export default MiniBoxProject
