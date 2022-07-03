import React from "react";
import {LineIcon} from "@/components/icons/icons";
import H1 from "@/components/typography/h1";
import "./main-section.scss";
import PlaneAnimation from "@/components/plane-animation";
import ContactButton from "@/components/buttons/contact-button";

export const MainSection: React.FC = () => {
    return <div className="intro">
        <p className="tag">
            I'm Yaroslav Zotov
            <LineIcon/>
            Available For Freelance Work
        </p>
        
        <H1>
            I'm Freelance Developer
            Creating Web, Mobile & Backend Apps
        </H1>
        
        <PlaneAnimation/>

        <div className="intro-content">
            <p className="text">
                I help companies to create high-load expandable systems fast and qualitative. I'm focusing on provide
                the best user experience, reliability and sustainability of your application. Mainly working with
                Flutter, React and go
            </p>
            
            <ContactButton/>
        </div>
    </div>
}