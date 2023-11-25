import React, { FC } from "react"
import Seo from "../../seo";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { ProjectsCover } from "@/components/projects-cover/projects-cover";
import { ProjectsImage } from "@/components/projects-image/projects-image";
import { ProjectsText } from "@/components/projects-text/projects-text";

const EposPage: FC = () => {
    return <div className="content">
        <Seo/>
        <Header/>
        <ProjectsCover
            title="Epos Next"
            subtitle="School education platform"
            client="Epos.School"
            services="Fullstack Development"
            industries="Education"
            date="2021">
            Epos Next is a modern education platform for Perm schoolchildren. I have reworked the outdated slower application, significantly speeding up the work and improve UX.
        </ProjectsCover>
        <ProjectsImage src="/images/epos/dashboard.png" first/>
        <ProjectsText>
            Using the old Epos application as a student gave me good knowledge to target and audience. It was not difficult for me to interview other students and teachers and quickly understand what platform they want to see from me. Most of the users noted the slow loading speed and awkward interface.
            My first step was to determine why the platform is running so slowly. I started my work by redesign the backend and data caching methods, refusal to use the Angular and transfer the application to React.
        </ProjectsText>
        <ProjectsImage src="/images/epos/screenshot-2.png"/>
        <ProjectsText>
            The website consists of a dashboard page and a page with student grades. Immediately after opening the application, all the information that the user may need is in front of his eyes. The next lesson, the timer before the start, homework, tests and class announcements. The sidebar contains a lesson schedule with the latest grades
        </ProjectsText>
        <ProjectsImage src="/images/epos/screenshot-3.png"/>
        <ProjectsImage src="/images/epos/screenshot-4.png"/>
        <ProjectsImage src="/images/epos/screenshot-5.png"/>
        <ProjectsText>
            Pocket version of Epos education platform. Available on both IOS & Android.
        </ProjectsText>
        <ProjectsImage src="/images/epos/mobile.png"/>
        <Footer/>
    </div>
}

export default EposPage