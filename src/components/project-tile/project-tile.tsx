import React, { FC, Fragment, memo, useState } from "react";
import "./project-tile.scss";
import { Link } from "@/components/link/link";
import { motion } from "framer-motion";
import { ScrollAnimated } from "@/components/scroll-animated/scroll-animated";

export type ProjectTileProps = {
    image: string;
    name: string;
    description: string;
    href: string;
}

export const ProjectTile: FC<ProjectTileProps> = memo((props) => {
    const [isHovered, setIsHovered] = useState(false)

    return <ScrollAnimated>
        <motion.a
            onMouseEnter={ () => setIsHovered(true) }
            onMouseLeave={ () => setIsHovered(false) }
            className="project-tile"
            href={ props.href }>
            <div
                style={ {backgroundImage: `url(${ props.image })`} }
                className="image">
                <div className="link-icon">
                    <img src="/icons/arrow-right.png"/>
                </div>
            </div>
            <Link
                setHovered={() => null}
                hovered={ isHovered }
                secondLink={ <Fragment>{ props.description }<Svg/></Fragment> }
                href={ props.href }>
                { props.name }<Svg/>
            </Link>
        </motion.a>
    </ScrollAnimated>
})

const Svg: FC = memo(() => {
    return <svg width={ 12 } height={ 12 } viewBox="0 0 12 12" fill="none">
        <path
            d="M10.5 1.5L1.5 10.5"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M4.5 1.5H10.5V7.5"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>

})