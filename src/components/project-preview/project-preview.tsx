import React from "react";
import "./project-preview.scss";

type Props = {
    coming: boolean,
    href: string,
    title: string,
    preview: string,
    client: string,
    text: string,
    number: string,
    index: number,
    intro?: string
}

export const ProjectPreview: React.FC<Props> = (props) => {
    return <section className={`project project-${props.index}`}>
        {
            props.intro && <div className="intro-container">
                <span className="intro-title">{props.intro}</span>
            </div>
        }
        <a href={props.href} target="_blank">
            {props.coming && <div className="badge-new">Coming Soon</div>}
            <div className="project-img">
                <img alt={`thumb project ${props.client} website`} src={props.preview}/>
            </div>
            <div className="project-desc">
                <span className="project-number">{props.number}</span>
                <span className="project-arrow"/>
                <span className="project-hover">
                            <span className="project-client">{props.client}</span>
                            <span className="project-view">View project</span>
                        </span>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </a>
    </section>
}