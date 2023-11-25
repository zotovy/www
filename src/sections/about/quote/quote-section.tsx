import React, { FC, memo } from "react";
import "./quote-section.scss";
import { ScrollAnimated } from "@/components/scroll-animated/scroll-animated";

export type QuoteSectionProps = {}

export const QuoteSection: FC<QuoteSectionProps> = memo(() => {
    return <section className="about-quote-section">
        <ScrollAnimated>
            <h2>I'm a developer by dream and hobby, then I'm a developer by profession</h2>
        </ScrollAnimated>
    </section>
})