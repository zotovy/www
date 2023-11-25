import React, { FC, memo } from "react";
import "./skills-section.scss";
import { ScrollAnimated } from "@/components/scroll-animated/scroll-animated";

export type SkillsSectionProps = {
    title: string;
    skills: string[];
}

export const SkillsSection: FC<SkillsSectionProps> = memo(props => {
    return <ScrollAnimated>
        <section className="about-skills-section">
            <h4 className="title">{ props.title }</h4>
            <ul className="skills">
                {
                    props.skills.map((text, index) => {
                        return <li className="skill" key={ `${ props.title }-${ index }` }>
                            <p>{ text }</p>
                        </li>
                    })
                }
            </ul>
        </section>
    </ScrollAnimated>
})