import { FC, memo } from "react";
import styles from "./avatar.module.scss"

export type AvatarProps = {

}

export const Avatar: FC<AvatarProps> = memo(() => {
    return <img className={styles.avatar} src="/images/avatar.png"/>
})