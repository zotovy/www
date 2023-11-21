import React, { FC, memo } from "react";
import "./main-section.scss";
import { Subtitle, Title } from "@/components/typography/typography";

export type MainSectionProps = {}

export const MainSection: FC<MainSectionProps> = memo(() => {
    return <div className="work-main-section">
        <Title>Work</Title>
        <Subtitle>
            I don't just create apps, I craft unforgettable experiences that leave a lasting impression.
        </Subtitle>
    </div>
})