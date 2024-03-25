import { FC, memo } from "react";
import styles from "./header.module.scss";
import { Logo } from "@/components/logo";
import { LanguageChangeButton } from "@/components/language-change-button";
import { ThemeChangeButton } from "@/components/theme-change-button";

export type HeaderProps = {

}

export const Header: FC<HeaderProps> = memo(() => {
    return <header className={styles.header}>
        <Logo/>
        <div className={styles.actions}>
            <LanguageChangeButton/>
            <ThemeChangeButton/>
        </div>
    </header>
})