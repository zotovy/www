import React from "react"
import styled from "styled-components"
import SectionLayoutStyles from "../layouts/sections"
import Title from "@/components/title"
import SkillCard from "@/components/skill-card"

export default function TechStack() {
  return <Section>
    <Title>Tech Stack</Title>
    <Grid>
      <SkillCard title="Next.js & React" subtitle="JavaScript framework built on top of React.js to create SSR applications."/>
      <SkillCard title="Flutter" subtitle="An open source SDK for creating native mobile apps for Android and IOS."/>
      <SkillCard title="Express JS" subtitle="Fast, flexible, minimalistic web framework for Node.js applications."/>
      <SkillCard title="ASP.NET Core" subtitle="Free and open-source framework by Microsoft for building amazing APIs  "/>
      <SkillCard title="Mongo, SQL, Redis" subtitle="Powerful key-value, relational and non-relational databases."/>
      <SkillCard title="SASS & SCSS" subtitle="CSS-based languages designed to increase the abstraction level of styles."/>
      <SkillCard title="Go" subtitle="is a statically typed, compiled programming language, perfect for microservices"/>
      <SkillCard title="MVC, DDD,  OOP" subtitle="Software product architecture and programming paradigms."/>
      <SkillCard title="Typescript" subtitle="A static typed programming language that extends the capabilities of JS."/>
    </Grid>
  </Section>
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  
  @media screen and (min-width: 678px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 678px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Section = styled.section`
  ${ SectionLayoutStyles };
  margin-bottom: 150px;

  ${ Title } {
    text-align: center;
    margin-bottom: 32px;
  }
`
