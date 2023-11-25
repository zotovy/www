import React, { FC, memo } from "react";
import Seo from "../seo";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { MainSection } from "@/sections/work/main/main-section";
import { ProjectsSection } from "@/sections/index/projects/projects-section";

export type WorksProps = {

}

export const Work: FC<WorksProps> = memo(() => {
    return <div className="content">
        <Seo/>
        <Header/>
        <MainSection/>
        <ProjectsSection/>
        <Footer/>
    </div>
})

export default Work;