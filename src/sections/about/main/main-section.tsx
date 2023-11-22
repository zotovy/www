import React, { FC, memo } from "react";
import "./main-section.scss"
import { Subtitle, Title } from "@/components/typography/typography";

export type MainSectionProps = {}

export const MainSection: FC<MainSectionProps> = memo(() => {
    return <div className="about-main-section">
        <Title>About</Title>
        <Subtitle>
            Hi! My name is Yaroslav, for more than 5 years I have been engaged in fullstack development, creating
            mobile, web and backend applications using modern tools
        </Subtitle>
    </div>
})