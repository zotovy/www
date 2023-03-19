import React from "react";
import "./cases-section.scss"
import OutlineTitle from "@/components/typography/outline-title";
import ProjectPreview from "@/components/project-preview";

export const CasesSection: React.FC = () => {
    return <div className="cases">
        <OutlineTitle className="outline-title">My Projects</OutlineTitle>

        <ProjectPreview
            coming={false}
            href="/projects/epos"
            title="New Apps for an Online Educational System"
            preview="/images/epos/cover.png"
            client="Epos Next"
            text="I've created new web and mobile apps (Android and iOS) for a school diary with major improvements in loading speed and user experience."
            number="01"
            index={1}/>

        <ProjectPreview
            coming={false}
            href="https://phototime.zotov.dev"
            title="The Best Mobile App for Photographers"
            preview="/images/phototime.jpg"
            client="Phototime"
            text="The app calculates the time of the golden and blue hours and also shows the weather forecast. A trusted assistant for any photographer."
            number="02"
            index={2}/>

        <ProjectPreview
            coming={false}
            href="/projects/lumi"
            title="A Qualified Medical Second Opinion Service"
            preview="/images/lumi/preview.png"
            client="Lumi"
            text="Lumi is my team's project for an IT project contest. It is a qualified medical second opinion, helping doctors diagnose diseases using AI."
            number="03"
            index={3}/>

        <ProjectPreview
            coming={false}
            href="/projects/credit"
            title="A Landing and a CRM System for Rocket Work"
            preview="/images/credit/preview.png"
            client="Rocket Work"
            text='Rocket Work launched a new project to issue loans to the self-employed. I developed a landing page and an internal admin panel for the bank employees and managers.'
            number="04"
            index={4}/>
    </div>
}