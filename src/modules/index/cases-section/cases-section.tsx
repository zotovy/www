import React from "react";
import "./cases-section.scss"
import OutlineTitle from "@/components/typography/outline-title";
import ProjectPreview from "@/components/project-preview";
import animation from "../../../../static/animations/plane.json"
import Lottie from "lottie-react";

export const CasesSection: React.FC = () => {
    return <div className="cases">
        <OutlineTitle className="outline-title">Case Studies &amp;&nbsp;Projects</OutlineTitle>

        <ProjectPreview
            coming={true}
            href="https://vidby.com/landing"
            title="Creating marketing pages and admin panel"
            preview="/images/vidby.png"
            client="Vidby"
            text="I've created marketing pages with modern CMS for Vidby, a service for AI video translations"
            number="01"
            index={0}/>

        <ProjectPreview
            coming={false}
            href="/projects/epos"
            title="Creating an electronic class register for schoolchildren"
            preview="/images/epos/cover.png"
            client="Epos Next"
            text="I've created new school diary web and mobile app (android, ios). Improved loading speed and user experience."
            number="02"
            index={1}/>

        <ProjectPreview
            coming={false}
            href="/projects/epos"
            title="Developing the best mobile app for photographers"
            preview="/images/phototime.jpg"
            client="Phototime"
            text="App calculates the time of the golden and blue hours, and also shows the weather anywhere in the world. A trusted assistant for any photographer"
            number="03"
            index={2}/>

        <div className="plane">
            <Lottie animationData={animation} loop={true}/>
        </div>
        
    </div>
}