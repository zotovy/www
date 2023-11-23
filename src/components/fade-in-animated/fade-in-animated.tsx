import { motion } from "framer-motion";
import React, { FC, memo, ReactNode } from "react"

export type FadeInAnimatedProps = {
    children?: ReactNode,
    delay?: number,
    duration?: number,
    y?: number,
}

export const FadeInAnimated: FC<FadeInAnimatedProps> = memo(props => {
    return <motion.div
        initial={{y: props.y ?? 80, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: props.duration ?? 1.2, delay: props.delay, ease: [0.44, 0, 0.56, 1]}}>
        { props.children }
    </motion.div>
})