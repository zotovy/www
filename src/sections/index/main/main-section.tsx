import React, { FC, memo } from "react";
import { motion } from "framer-motion";
import "./main-section.scss";
import { Link } from "@/components/link/link";
import { Subtitle, Title } from "@/components/typography/typography";

export type MainSectionProps = {}

export const MainSection: FC<MainSectionProps> = memo(() => {
    return <main className="index-main-section">
        <Subtitle>
            I help companies to create high-load expandable systems fast and qualitative, focusing on provide the
            best user experience, reliability and sustainability of your application
        </Subtitle>
        <div className="container">
            <Title>Freelance Fullstack<br/>Developer</Title>
            <motion.div
                initial={ {y: 20, opacity: 0} }
                animate={ {y: 0, opacity: 1} }
                transition={ {duration: 0.8, delay: 0.5, ease: [0.44, 0, 0.56, 1]} }
                className="actions">
                <Link href="mailto:hello@zotov.dev">hello@zotov.dev</Link>
                <span className="scroll">Scroll to explore</span>
            </motion.div>
        </div>
    </main>
})