import React from "react"
import Seo from "seo";
import { Header } from "@/components/header/header";
import { MainSection } from "@/sections/index/main/main-section";
import { ProjectsSection } from "@/sections/index/projects/projects-section";
import { Footer } from "@/components/footer/footer";

export default function IndexPage() {
    return <div className="content">
        <Seo/>
        <Header/>
        <MainSection/>
        <ProjectsSection/>
        <Footer/>
    </div>
}
