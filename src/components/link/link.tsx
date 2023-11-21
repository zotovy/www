import React, { FC, memo, ReactNode, useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import "./link.scss";
import classNames from "classnames";

export type LinkProps = {
    children?: ReactNode,
    secondLink?: ReactNode,
    href?: string,
    className?: string,
    hovered?: boolean,
    setHovered?: (val: boolean) => any,
}

export const Link: FC<LinkProps> = memo((props) => {
    useEffect(() => {
        if (typeof props.hovered !== "undefined") {
            setIsHovered(props.hovered)
        }
    }, [props.hovered])
    
    const setHovered = (value: boolean) => {
        if (props.setHovered) props.setHovered(value)
        else setIsHovered(value)
    }

    const [isHovered, setIsHovered] = useState(false);

    return <motion.a
        href={ props.href }
        className={ classNames("link-container", props.className) }
        onMouseEnter={ () => setHovered(true) }
        onMouseLeave={ () => setHovered(false) }>
        <AnimatedWord
            isHovered={ isHovered }
            animation={ letterAnimation }>
            { props.children }
        </AnimatedWord>
        <div className="link-hover-container">
            <AnimatedWord
                isHovered={ isHovered }
                animation={ letterAnimationTwo }>
                { props.secondLink ?? props.children }
            </AnimatedWord>
        </div>
    </motion.a>
})

type AnimatedWordProps = {
    children?: ReactNode;
    isHovered: boolean;
    animation: Variants;
}

const AnimatedWord: FC<AnimatedWordProps> = memo((props) => {
    return <motion.span
        variants={ titleAnimation }
        initial="rest"
        animate={ props.isHovered ? "hover" : "rest" }
        className="link-word-container">
        <motion.span className="link-word" variants={ props.animation }>
            { props.children }
        </motion.span>
    </motion.span>
})

const titleAnimation = {
    rest: {
        transition: {
            staggerChildren: 0.003,
        },
    },
    hover: {
        transition: {
            staggerChildren: 0.003,
        },
    },
};

const letterAnimation = {
    rest: {
        y: 0,
    },
    hover: {
        y: -30,
        transition: {
            duration: 0.3,
            ease: [0.6, 0.01, 0.05, 0.95],
            type: "tween",
        },
    },
};

const letterAnimationTwo = {
    rest: {
        y: 30,
    },
    hover: {
        y: 0,
        transition: {
            duration: 0.3,
            ease: [0.6, 0.01, 0.05, 0.95],
            type: "tween",
        },
    },
};