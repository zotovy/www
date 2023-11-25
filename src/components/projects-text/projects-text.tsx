import React, { FC, memo, ReactNode } from "react";
import { motion } from "framer-motion";
import "./projects-text.scss";

export type ProjectsTextProps = {
    children: ReactNode,
}

export const ProjectsText: FC<ProjectsTextProps> = memo(props => {
    return <section className="projects-text">
        <motion.div
            initial={ {opacity: 0, y: 50} }
            whileInView={ {opacity: 1, y: 0} }
            transition={ {ease: [0.44, 0, 0.56, 1], duration: 0.8} }
            viewport={ {once: true} }>
            <p>
                { props.children }
            </p>
        </motion.div>
    </section>
}) 