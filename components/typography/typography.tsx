import { FC, memo, ReactNode } from "react";
import styles from "./typography.module.scss";

export type TypographyProps = {
    children: ReactNode
}

export const Title: FC<TypographyProps> = memo(props => {
    return <h2 className={ styles.title }>
        { props.children }
    </h2>
})

export const Paragraph: FC<TypographyProps> = memo(props => {
    return <p className={ styles.paragraph }>
        { props.children }
    </p>
})