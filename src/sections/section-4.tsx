import React from "react"
import styled from "styled-components"
import SectionLayoutStyles from "../layouts/sections"
import Title from "@/components/Title"

export default function Section4() {
  return <Section>
    <Title>My Projects</Title>
    <Layout>
      <div>
        <Placeholder className="first"/>
        <Placeholder className="second"/>
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
`;

const Layout = styled.div`
  display: flex;
`;

const Section = styled.section`
  ${ SectionLayoutStyles };
  margin-bottom: 150px;
`
