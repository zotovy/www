import React, { FC, memo, ReactNode } from "react"
import "./projects-cover.scss";
import { FadeInAnimated } from "@/components/fade-in-animated/fade-in-animated";

export type ProjectsCoverProps = {
    title: string;
    subtitle: string;
    children: ReactNode;
    client: string;
    services: string;
    industries: string;
    date: string;
}

export const ProjectsCover: FC<ProjectsCoverProps> = memo(props => {
    return <main className="projects-cover">
        <FadeInAnimated y={50} duration={0.8}>
            <h1 className="title">{ props.title }</h1>
        </FadeInAnimated>
        <FadeInAnimated y={50} duration={0.8}>
            <h4 className="subtitle">{ props.subtitle }</h4>
        </FadeInAnimated>
        <FadeInAnimated y={50} duration={0.8}>
            <p className="description">{props.children}</p>
        </FadeInAnimated>
        <FadeInAnimated y={50} duration={0.8}>
            <div className="grid">
                <div className="cell">
                    <h6 className="cell-title">Client</h6>
                    <p className="cell-subtitle">{props.client}</p>
                </div>
                <div className="cell">
                    <h6 className="cell-title">Services</h6>
                    <p className="cell-subtitle">{props.services}</p>
                </div>
                <div className="cell">
                    <h6 className="cell-title">Industries</h6>
                    <p className="cell-subtitle">{props.industries}</p>
                </div>
                <div className="cell">
                    <h6 className="cell-title">Date</h6>
                    <p className="cell-subtitle">{props.date}</p>
                </div>
            </div>
        </FadeInAnimated>
    </main>;
})
