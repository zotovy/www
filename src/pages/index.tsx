import React from "react";
import styled from "styled-components"
import Section1 from "@/sections/section-1";
import Section2 from "@/sections/section-2";
import Section3 from "@/sections/section-3";
// import SkillCard from "@/components/skill-card"

const Container = styled.div`
  
`;

export default function IndexPage() {
  return <Container>
    <Section1/>
    <Section2/>
    <Section3/>
  </Container>
}
