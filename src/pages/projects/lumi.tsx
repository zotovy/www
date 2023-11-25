import React, { FC, memo } from "react";
import Seo from "../../seo";
import { Header } from "@/components/header/header";
import { ProjectsCover } from "@/components/projects-cover/projects-cover";
import { ProjectsImage } from "@/components/projects-image/projects-image";
import { ProjectsText } from "@/components/projects-text/projects-text";
import { Footer } from "@/components/footer/footer";

const Lumi: FC = memo(() => {
    return <div className="content">
        <Seo/>
        <Header/>
        <ProjectsCover
            title="Lumi"
            subtitle="Qualified medical second opinion"
            client="Medsi"
            services="Fullstack Development"
            industries="Medicine"
            date="2022">
            Lumi is our project for the contest of IT projects "Perspective". This is a qualified second opinion that helps doctors diagnose dangerous diseases with the help of AI.
        </ProjectsCover>
        <ProjectsImage src="/images/lumi/dashboard.png" first/>
        <ProjectsText>
            The average accuracy of the correct diagnosis by doctors is about 75%. Modern neural networks are able to diagnose diseases no worse than a person. Our team has developed a service that is able to diagnose dangerous kidney formations, brain tumors and skin cancer, and also decipher analyzes.
            Our first step was to train neural networks. In parallel, we were developing a UI for a website and a mobile application. The service is already available for testing.
        </ProjectsText>
        <ProjectsImage src="/images/lumi/screenshot-5.png"/>
        <ProjectsText>
            The website consists of a patients data list and pages with different types of diagnoses.
        </ProjectsText>
        <ProjectsImage src="/images/lumi/screenshot-1.png"/>
        <ProjectsImage src="/images/lumi/screenshot-2.png"/>
        <ProjectsImage src="/images/lumi/screenshot-3.png"/>
        <ProjectsImage src="/images/lumi/screenshot-4.png"/>
        <ProjectsImage src="/images/lumi/screenshot-6.png"/>
        <ProjectsImage src="/images/lumi/screenshot-7.png"/>
        <ProjectsImage src="/images/lumi/screenshot-8.png"/>
        <ProjectsImage src="/images/lumi/screenshot-9.png"/>
        <ProjectsText>
            Pocket version of Lumi service. Available on both IOS & Android.
        </ProjectsText>
        <ProjectsImage src="/images/lumi/mobile.png"/>
        <Footer/>
    </div>
})

export default Lumi