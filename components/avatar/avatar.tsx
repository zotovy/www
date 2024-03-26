import { FC, memo } from "react";
import styles from "./avatar.module.scss"
import Image from "next/image";

export type AvatarProps = {}

export const Avatar: FC<AvatarProps> = memo(() => {
    return <Image className={ styles.avatar } src="/images/avatar.png" alt="" width={ 64 } height={ 64 }/>
})