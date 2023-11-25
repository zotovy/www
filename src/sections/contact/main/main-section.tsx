import React, { FC, memo } from "react";
import "./main-section.scss";
import { Subtitle, Title } from "@/components/typography/typography";

export type MainSectionProps = {}

export const MainSection: FC<MainSectionProps> = memo(() => {
    return <main className="contact-main-section">
        <Title>Let's talk</Title>
        <Subtitle>You can always contact me for freelance opportunities - or just to chat :)</Subtitle>
    </main>
})