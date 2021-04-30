import React from "react"
import styled from "styled-components"
import SectionLayoutStyles from "../layouts/sections"
import Title from "@/components/Title"

export default function Section3() {
  return <Section>
    <Title>About Me</Title>
    <Layout>
      <Image/>
      <RightSide>
        <Information>
          Hi! My name is Yaroslav Zotov. I’m 15 y.o. based in Perm, Russia.
          Positing myself as a Fullstack developer, working with
          web & mobile technologies.
        </Information>
        <Information>
          I appreciate my time, but always ready to help you build your product.
          Developed team skills, friendly. I keep my finger on the pulse of IT
          and strive to meet modern standards. I know English, level B2. As a
          competent engineer, I first of all care about optimization, convenient
          architecture and scalability of the project. d
        </Information>
      </RightSide>
    </Layout>
  </Section>
}

const Information = styled.p`
  font-size: 18px;
  line-height: 32px;
  color: rgba(25, 37, 49, 0.9);
  margin-right: 50px;
`;

const Image = styled.img`
  flex: 0 0 auto;
  width: 326px;
  height: 326px;
  background: #C4C4C4;
  border-radius: 20px;
  margin-left: 50px;
  margin-right: 70px;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 326px;
  
  ${Information} {
    margin-bottom: 20px;
  }
  
  ${Information}:last-child {
    margin-bottom: 0;
  }
`;

const Layout = styled.div`
  display: flex;
`;

const Section = styled.section`
  ${ SectionLayoutStyles };
  margin-bottom: 150px;
`
