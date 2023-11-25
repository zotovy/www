import React, { FC, memo } from "react";
import "./summary-section.scss";
import { ScrollAnimated } from "@/components/scroll-animated/scroll-animated";

export type SummarySectionProps = {
    
}

export const SummarySection: FC<SummarySectionProps> = memo(() => {
    return <section className="about-summary-section">
        <ScrollAnimated>
            <p className="text">
                Experienced Software Developer with a passion for crafting robust web and mobile applications.
                Proficient in Flutter, React, and Node.js, with a proven track record of delivering high-quality code
                and ensuring system stability to clients around the world. Skilled in designing RESTful APIs and
                automating CI/CD pipelines. Excels in fast-paced, collaborative environments.
            </p>
        </ScrollAnimated>
    </section>
})