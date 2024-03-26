import { FC, memo, ReactNode } from "react";
import NextLink from "next/link"
import classNames from "classnames";
import styles from "./link.module.scss";

export type LinkProps = {
    children: ReactNode,
    href: string,
    className?: string,
}

export const Link: FC<LinkProps> = memo((props) => {
    return <NextLink href={props.href} className={classNames(styles.link, props.className)}>
        { props.children }
    </NextLink>
})