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

            I'm <span className="margin-freelance">Freelance</span>
            <svg width="102" height="72" viewBox="0 0 102 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.303 32.672L9.16 22.384L87.5 0.5L101.5 44.5L7.038 72L0 45.726L5.303 32.672Z" fill="#4183e7"/>
                <text transform="rotate(-15 47.263 34.018)" fontFamily="Averta-Bold, Averta" fontSize="18"
                      fontWeight="bold" fill="white">
                    <tspan x="13" y="40">Fullstack</tspan>
                </text>               
                <path d="M20 29.54L0 46L8.615 23L20 29.54Z" fill="#3265b3"/>
            </svg>

            {/*<svg width="90" height="68" xmlns="http://www.w3.org/2000/svg">*/}
            {/*    <g fill="none" fillRule="evenodd">*/}
            {/*        <path fill="#EEA1BE" d="M5.303 28.672L9.16 18.384 77.742 0 90 45.762 7.038 68 0 41.726z"/>*/}
            {/*        <text transform="rotate(-15 47.263 34.018)" fontFamily="Averta-Bold, Averta" fontSize="18"*/}
            {/*              fontWeight="bold" fill="#18033C">*/}
            {/*            <tspan x="13.263" y="40.518">Fullstack</tspan>*/}
            {/*        </text>*/}
            {/*        <path fill="#C26A8B" d="M20 25.54L0 42l8.615-23z"/>*/}
            {/*    </g>*/}
            {/*</svg>*/}
            <span className="margin-designer">Developer</span><br/>
            Creating Web, Mobile & Backend Apps
            
            {/*I'm Freelance Developer*/}
            {/*Creating Web, Mobile & Backend Apps
            <span className="margin-designer">Developer</span><br/> Turning Your Paperball Into Paperplane
            */}
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