import React, {useCallback} from "react"
import { navigate } from "gatsby";
import styled from "styled-components"
import SectionLayoutStyles from "@/layouts/sections"
import Title from "@/components/title"
import ProjectPreview from "@/components/project-preview";
import {trackProjectClick} from "@analytics";

export default function MyProjects() {
  
  const handleClick = useCallback((page: string) => () => {
    trackProjectClick(page)
    return navigate(page)
  }, [])
  
  return <Section id="my-projects-section">
    <Title>My Projects</Title>
    <Layout>
      <div>
        <ProjectPreview
          className="first"
          src="images/epos/cover.png"
          onClick={handleClick("/projects/epos")}/>
        <ProjectPreview
            className="second"
            src="images/phototime.jpg"
            onClick={handleClick("https://phototime.zotov.dev")}/>
      </div>
      <Placeholder className="third"/>
    </Layout>
  </Section>
}


const Placeholder = styled.div`
  background: #C4C4C4;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 300ms, background 200ms;
  transition-delay: 100ms;

  &.first, &.second {
    flex: 0 0 auto;
    width: 370px;
    height: 250px;
    margin-right: 30px;
  }

  &.first {
    margin-bottom: 30px;
  }

  &.third {
    width: 100%;
    height: 530px;
  }

  &:active {
    transform: scale(0.975);
  }

  &:hover {
    background: #c0c0c0;
  }
  
  @media screen and (min-width: 850px) and (max-width: 1024px) {
    &.first, &.second {
      width: 300px;
      height: 200px;
    }

    &.third {
      width: 100%;
      height: 430px;
    }
  }
  
  @media screen and (max-width: 850px) {
    width: 100% !important;
    height: 0 !important;
    padding-top: 56.25%;
    
    &.third {
      margin-top: 30px;
    }
  }
`;

const Layout = styled.div`
  display: flex;

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

const Section = styled.section`
  ${ SectionLayoutStyles };
  margin-bottom: 150px;
`
