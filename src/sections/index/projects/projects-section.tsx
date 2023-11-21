import React, { FC, memo } from "react";
import { ProjectTile } from "@/components/project-tile/project-tile";
import "./projects-section.scss";

export type ProjectsSectionProps = {

}

export const ProjectsSection: FC<ProjectsSectionProps> = memo(() => {
    return <div className="index-project-section">
        <ProjectTile
            name="Epos Next"
            description="Creating an electronic class register for schoolchildren"
            href="/projects/epos"
            image="/images/epos/cover.png"/>
        <ProjectTile
            name="Phototime"
            description="Developing the best mobile app for photographers"
            href="phototime.zotov.dev"
            image="/images/phototime.jpg"/>
        <ProjectTile
            name="Lumi"
            description="Creating medical second opinion service"
            href="/projects/lumi"
            image="/images/lumi/preview.png"/>
        <ProjectTile
            name="Rocket Work"
            description="Developing Landing and CRM"
            href="/projects/rocket-work"
            image="/images/credit/preview.png"/>
        
    </div>
})