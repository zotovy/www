import React, { FC, memo } from "react";
import "./main-section.scss";
import { Title } from "@/components/typography/typography";
import { Button } from "@/components/button/button";
import { FadeInAnimated } from "@/components/fade-in-animated/fade-in-animated";

export type MainSectionProps = {}

export const MainSection: FC<MainSectionProps> = memo(() => {
    return <div className="page-404-main-section">
        <Title>
            Oops. It looks like the page you're trying to reach <span className="disabled">doesn't exist</span> or has been moved.
        </Title>
        <FadeInAnimated delay={0.3} duration={0.8} y={50}>
            <Button href="/">Go to Home</Button>    
        </FadeInAnimated>
    </div>
})