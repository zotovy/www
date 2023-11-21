import React, { FC, Fragment, memo, useState } from "react";
import { Link } from "@/components/link/link";
import { motion } from "framer-motion";
import "./header.scss";
import { MenuButton } from "@/components/menu-button/menu-button";
import classNames from "classnames";

export type HeaderProps = {}

export const Header: FC<HeaderProps> = memo(() => {
    const [menuOpen, setMenuOpen] = useState(false)

    return <Fragment>
        <motion.header
            initial={ {y: -20, opacity: 0} }
            animate={ {y: 0, opacity: 1} }
            transition={ {duration: 0.8, delay: 0.5, ease: [0.44, 0, 0.56, 1]} }
            className="page-header">
            <div className="page-header-container">
                <Link className="name" href="/">Yaroslav Zotov</Link>
                <div className="right">
                    <Link href="/work">Work</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                    <MenuButton
                        isOpen={ menuOpen }
                        onClick={ () => setMenuOpen(!menuOpen) }
                        strokeWidth="2"
                        lineProps={ {strokeLinecap: "round"} }
                        color="#FFFFFF"
                        transition={ {ease: "easeOut", duration: 0.2} }
                        width="24"
                        height="18"
                    />
                </div>
            </div>
        </motion.header>
        <div
            className={ classNames("menu-slider", {open: menuOpen}) }
            onClick={ () => setMenuOpen(false) }>
            <Link href="/work">Work</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </div>
    </Fragment>
})