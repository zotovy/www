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
            title="Creating an electronic class register for schoolchildren"
            preview="/images/epos/cover.png"
            client="Epos Next"
            text="I've created new school diary web and mobile app (android, ios). Improved loading speed and user experience."
            number="01"
            index={1}/>

        <ProjectPreview
            coming={false}
            href="https://phototime.zotov.dev"
            title="Developing the best mobile app for photographers"
            preview="/images/phototime.jpg"
            client="Phototime"
            text="App calculates the time of the golden and blue hours, and also shows the weather anywhere in the world. A trusted assistant for any photographer"
            number="02"
            index={2}/>

        <ProjectPreview
            coming={false}
            href="/projects/lumi"
            title="Creating medical second opinion service"
            preview="/images/lumi/preview.png"
            client="Lumi"
            text='Lumi is our project for the contest of IT projects "Perspective". This is a qualified second opinion that helps doctors diagnose dangerous diseases with the help of AI.'
            number="03"
            index={3}/>

        <ProjectPreview
            coming={false}
            href="/projects/credit"
            title="Developing Landing and CRM"
            preview="/images/credit/preview.png"
            client="Rocket Work"
            text='Rocket Work was launching a new project to issue loans to the self-employed. I was developing a landing page and an internal admin panel for bank employees and managers.'
            number="04"
            index={4}/>
    </div>
}