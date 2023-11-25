import React, { FC, memo } from "react";
import { motion } from "framer-motion";
import "./projects-image.scss";

export type ProjectsImageProps = {
    src: string;
    alt?: string;
    first?: boolean;
}

export const ProjectsImage: FC<ProjectsImageProps> = memo(props => {
    return <section className="projects-image">
        <motion.div
            {...(props.first ? firstAnimation : animation)}
            className="container">
            <img src={props.src} alt={props.alt ?? ""}/>
        </motion.div>
    </section>
})

const firstAnimation = {
    initial: {scale: 1.1},
    whileInView:{scale: 1},
    transition: {ease: [0.44, 0, 0.56, 1], duration: 0.8},
    viewport: {once: true},
}

const animation = {
    initial: {opacity: 0, y: 50},
    whileInView:{opacity: 1, y: 0},
    transition: {ease: [0.44, 0, 0.56, 1], duration: 0.8},
    viewport: {once: true},
}