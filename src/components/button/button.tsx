import React, { FC, ReactNode, memo } from "react";
import "./button.scss"

export type ButtonProps = {
    children?: ReactNode,
    href?: string,
}

export const Button: FC<ButtonProps> = memo(props => {
    return <a href={props.href} className="button-component">
        {props.children}
    </a>
})

