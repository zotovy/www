import React from "react";
import styled from "styled-components"
import Section1 from "@/sections/section-1";
import SkillCard from "@/components/skill-card"

const Container = styled.div`
  padding: 30px;
  width: 320px;
`;

export default function IndexPage() {
  return <Container>
    <SkillCard title="Next.js & React" subtitle="JavaScript framework built on top of React.js to create SSR applications."/>
    {/*<Section1/>*/}
  </Container>
}
