import React, { FC, Fragment, memo, useState } from "react";
import "./project-tile.scss";
import { Link } from "@/components/link/link";
import { motion } from "framer-motion";
import { ScrollAnimated } from "@/components/scroll-animated/scroll-animated";
import { LinkIcon } from "@/components/svgs";

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
                secondLink={ <Fragment>{ props.description }<LinkIcon/></Fragment> }
                href={ props.href }>
                { props.name }<LinkIcon/>
            </Link>
        </motion.a>
    </ScrollAnimated>
})

