import React, { FC, memo, ReactNode } from "react";
import { motion } from "framer-motion";
import "./typography.scss"

export type TypographyProps = {
    children?: ReactNode
}

export const Title: FC<TypographyProps> = memo(props => {
    return <motion.h1 { ...animation } className="title-component">{ props.children }</motion.h1>
})

export const Subtitle: FC<TypographyProps> = memo(props => {
    return <motion.h4 { ...animation } className="subtitle-component">{ props.children }</motion.h4>
})

const animation = {
    initial: {y: 80, opacity: 0},
    animate: {y: 0, opacity: 1},
    transition: {duration: 1.2, ease: [0.44, 0, 0.56, 1]},
}