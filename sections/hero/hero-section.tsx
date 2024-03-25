import { FC, memo } from "react";
import { Avatar } from "@/components/avatar";
import { Paragraph, Title } from "@/components/typography";
import styles from "./hero-section.module.scss";
import { useTranslations } from "next-intl";

export type HeroSectionProps = {}

export const HeroSection: FC<HeroSectionProps> = memo(() => {
    const t = useTranslations("hero")
    
    return <section className={ styles.hero }>
        <Avatar/>
        <Title>{ t("name") }</Title>
        <Paragraph>{ t("bio") }</Paragraph>
    </section>
})

