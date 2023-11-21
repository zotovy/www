import React, { FC, memo } from "react";
import { motion, Transition, SVGMotionProps } from "framer-motion";

type Props = SVGMotionProps<any> & {
    isOpen?: boolean;
    color?: string;
    strokeWidth?: string | number;
    transition?: Transition;
    lineProps?: any;
}

export const MenuButton: FC<Props> = memo((props) => {
    const variant = props.isOpen ? "opened" : "closed";
    const top = {
        closed: {
            rotate: 0,
            translateY: 0
        },
        opened: {
            rotate: 45,
            translateY: 2
        }
    };
    const center = {
        closed: {
            opacity: 1
        },
        opened: {
            opacity: 0
        }
    };
    const bottom = {
        closed: {
            rotate: 0,
            translateY: 0
        },
        opened: {
            rotate: -45,
            translateY: -2
        }
    };
    const lineProps = {
        stroke: props.color,
        strokeWidth: props.strokeWidth as number,
        vectorEffect: "non-scaling-stroke",
        initial: "closed",
        animate: variant,
        transition: props.transition,
        ...props.lineProps
    };
    const unitHeight = 4;
    const unitWidth = (unitHeight * (props.width as number)) / (props.height as number);

    return (
        <motion.svg
            className="menu-button"
            viewBox={ `0 0 ${ unitWidth } ${ unitHeight }` }
            overflow="visible"
            preserveAspectRatio="none"
            width={ props.width }
            height={ props.height }
            { ...props }
        >
            <motion.line
                x1="0"
                x2={ unitWidth }
                y1="0"
                y2="0"
                variants={ top }
                { ...lineProps }
            />
            <motion.line
                x1="0"
                x2={ unitWidth }
                y1="2"
                y2="2"
                variants={ center }
                { ...lineProps }
            />
            <motion.line
                x1="0"
                x2={ unitWidth }
                y1="4"
                y2="4"
                variants={ bottom }
                { ...lineProps }
            />
        </motion.svg>
    );
})
