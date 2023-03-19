import React from "react";
import {LineIcon} from "@/components/icons/icons";
import H1 from "@/components/typography/h1";
import "./main-section.scss";
import PlaneAnimation from "@/components/plane-animation";
import ContactButton from "@/components/buttons/contact-button";

export const MainSection: React.FC = () => {
    return <div className="intro">
        <p className="tag">
            Yaroslav Zotov
            <LineIcon/>
            Available for Freelance Work
        </p>

        <H1>

            I'm a <span className="margin-freelance">Freelance</span>
            <svg width="102" height="72" viewBox="0 0 102 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.303 32.672L9.16 22.384L87.5 0.5L101.5 44.5L7.038 72L0 45.726L5.303 32.672Z" fill="#4183e7"/>
                <text transform="rotate(-15 47.263 34.018)" fontFamily="Averta-Bold, Averta" fontSize="18"
                      fontWeight="bold" fill="white">
                    <tspan x="12.5" y="43.5">Fullstack</tspan>
                </text>               
                <path d="M20 29.54L0 46L8.615 23L20 29.54Z" fill="#3265b3"/>
            </svg>
            
            <span className="margin-developer">Developer</span><br/>
            Creating Web, Mobile & Backend Apps
        </H1>

        <PlaneAnimation/>

        <div className="intro-content">
            <p className="text">
            I help companies create high-load, expandable systems quickly and qualitatively. I focus on providing the best user experience, reliability, and sustainability of your application. I work with Flutter, React, and Go.
            </p>

            <ContactButton/>
        </div>
    </div>
}