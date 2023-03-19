import React from "react"
import "./project-title.scss"

type Props = {
    children: React.ReactNode,
}

const ProjectTitle: React.FC<Props> = (props) => {
    return <h1 className="project-title">{ props.children }</h1>
}

export default ProjectTitle