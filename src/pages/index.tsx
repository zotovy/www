import React from "react";
import styled from "styled-components"
import Section1 from "@/sections/section-1";
import Section2 from "@/sections/section-2";
import Section3 from "@/sections/section-3";
import Section4 from "@/sections/section-4";
import Section5 from "@/sections/section-5";
// import BlogPost from "@/components/blog-post"

const Container = styled.div`
  //width: 480px;
  //padding: 100px;
`;

export default function IndexPage() {
  return <Container>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
  </Container>
}
