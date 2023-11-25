import React, { FC, memo, ReactNode } from "react";
import { motion } from "framer-motion";

export type ScrollAnimatedProps = {
    children: ReactNode,
    delay?: number,
}

export const ScrollAnimated: FC<ScrollAnimatedProps> = memo(props => {
    return <motion.div
        initial={ {opacity: 0, scale: 0.95} }
        whileInView={ {opacity: 1, scale: 1} }
        transition={ {ease: [0.19, 0, 0.5, 1], delay: props.delay ?? 0.2, duration: 1} }
        viewport={ {once: true} }
    >
        { props.children }
    </motion.div>
})