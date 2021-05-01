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
          architecture and scalability of the project.
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
  
  @media screen and (min-width: 620px) and (max-width: 960px) {
    max-width: 700px;
    text-align: center;  
    margin-right: 0;
  }
  
`;

const Image = styled.img`
  flex: 0 0 auto;
  width: 326px;
  height: 326px;
  background: #C4C4C4;
  border-radius: 20px;
  margin-left: 50px;
  margin-right: 70px;

  @media screen and (max-width: 620px) {
    width: calc(100vw - 40px);
    height: calc(100vw - 40px);
    margin-bottom: 10px;
    margin-left: 0;
  }
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
  
  @media screen and (max-width: 960px) {
      align-items: center;
  }
`;

const Layout = styled.div`
  display: flex;
  
  @media screen and (min-width: 620px) and (max-width: 960px) {  
    align-items: center;
  }
  
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const Section = styled.section`
  ${ SectionLayoutStyles };
  margin-bottom: 150px;
`