import React, { FC, memo } from "react";
import Seo from "../seo";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { MainSection } from "@/sections/about/main/main-section";
import { SummarySection } from "@/sections/about/summary/summary-section";
import { SkillsSection } from "@/sections/about/skills/skills-section";
import { QuoteSection } from "@/sections/about/quote/quote-section";

export type AboutProps = {

}

const About: FC<AboutProps> = memo(() => {
    return <div className="content">
        <Seo/>
        <Header/>
        <MainSection/>
        <SummarySection/>
        {
            skills.map(skill =>  <SkillsSection key={`skill-${skill}`} {...skill}/>)
        }
        <QuoteSection/>
        <Footer/>
    </div>
})

export default About

const skills = [
    { 
        title: "Mobile",
        skills: [
            "Proficient in Flutter & Dart",
            "Strong knowledge of Kotlin & Swift",
            "Skilled in Android and iOS development",
            "Experience with third-party libraries & REST",
        ],
    },
    {
        title: "Web",
        skills: [
            "Proficient in React & Next.js",
            "Strong knowledge of JavaScript & Typescript",
            "Experience with third-party libraries & REST",
            "Skilled in responsive UI",
        ],
    },
    {
        title: "Backend",
        skills: [
            "Proficient in Express.js, Nest.js",
            "Skilled in golang, dotnet, php development",
            "Strong knowledge of databases, docker, message brokers, ci/cd, devops tools",
            "Experience with third-party libraries, REST, GraphQL",
        ],
    },
]