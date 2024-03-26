import { FC, memo, ReactNode } from "react";
import { Project } from "@/types";
import styles from "./project-section.module.scss";
import { Paragraph, Title } from "@/components/typography";

export type ProjectSectionProps = {
    project: Project,
    children?: ReactNode,
}

export const ProjectSection: FC<ProjectSectionProps> = memo(props => {
    return <section className={ styles.section }>
        <div className={ styles.info }>
            <Title>{ props.project.title }</Title>
            <Paragraph>{ props.project.description }</Paragraph>
        </div>

        <div className={ styles.photos }>
            {
                props.project.photos.map((url, index) => {
                    return <img
                        src={ url }
                        className={ styles.image }
                        key={ `pr-${ props.project.title }-ph-${ index }` }
                        alt="project preview"/>
                })
            }
        </div>
    </section>
})

