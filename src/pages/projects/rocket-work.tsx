import React, { FC, memo } from "react";
import Seo from "../../seo";
import { Header } from "@/components/header/header";
import { ProjectsCover } from "@/components/projects-cover/projects-cover";
import { ProjectsImage } from "@/components/projects-image/projects-image";
import { ProjectsText } from "@/components/projects-text/projects-text";
import { Footer } from "@/components/footer/footer";

const RocketWork: FC = memo(() => {
    return <div className="content">
        <Seo/>
        <Header/>
        <ProjectsCover
            title="RocketWork"
            subtitle="Landing and CRM For Rocket Work"
            client="RocketWork"
            services="Frontend Development"
            industries="Finance"
            date="2022">
            Rocket Work is a service for working with self-employed and other freelance specialists. Here you can make mass payments to freelancers, sign contracts, acts, collect checks, select any performers on the platform and invite your own
        </ProjectsCover>
        <ProjectsImage src="/images/credit/main.png" first/>
        <ProjectsText>
            Rocket Work was launching a new project to issue loans to the self-employed. I was developing a landing page and an internal admin panel for bank employees and managers.
            The landing page is an advertising one-page website with a form for filling out a loan application. CRM system is used by employees for fast processing of applications.
            I was developing a website and an internal service for working with applications for Next.js, held the position of the main frontend developer.
        </ProjectsText>
        <ProjectsText>
            Advertising one-page website with a loan application form
        </ProjectsText>
        <ProjectsImage src="/images/credit/landing.png"/>
        <ProjectsText>
            An internal system for Rocket Work employees that allows them to interact with applications. Due to the company's security, I can't show all screenshots of the internal admin panel
        </ProjectsText>
        <ProjectsImage src="/images/credit/crm.png"/>
        <Footer/>
    </div>
})

export default RocketWork