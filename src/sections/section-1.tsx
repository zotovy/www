import React from "react"
import styled from "styled-components"
import Button from "@/components/button"


export default function Section1() {
  return <Section>
    <RightSide>
      <Title>Developer you were looking for </Title>
      <Subtitle>Hi! I’m Yaroslav Zotov. Fullstack Developer based in Russia.</Subtitle>
      <Buttons>
        <Button type="primary">Contact Me</Button>
        <Button type="secondary">My Works</Button>
      </Buttons>
    </RightSide>
    <Image src="/images/section-1.png" />
  </Section>
}

const fade = `animation: fadeAnim 1s ease; animation-fill-mode: both;`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 54px;
  line-height: 81px;
  margin-bottom: 20px;
  max-width: 444px;
  color: var(--text);
  ${ fade };

  @media screen and (min-width: 768px) and (max-width: 960px) {
    line-height: 72px;
    font-size: 48px;
  }

  @media screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    max-width: 305px;
  }
`

const Subtitle = styled.span`
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: var(--secondary);
  max-width: 326px;
  ${ fade };

  @media screen and (min-width: 768px) and (max-width: 960px) {
    line-height: 26px;
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 17px;
    line-height: 25px;
    max-width: 345px;
  }
`

const Buttons = styled.div`
  display: flex;
  margin-top: 30px;
  ${ fade };

  .button[data-type=primary] {
    margin-right: 40px;
  }
  
  @media screen and (max-width: 768px) {
    width: 100%;
    
    .button[data-type=secondary] {
      display: none;
    }

    .button[data-type=primary] {
      width: 100%;
      margin-right: 0;
    }
  }
`

const Image = styled.img`
  width: 50%;
  ${ fade };
`

const RightSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    align-items: center;
    margin-top: 40px;
    min-width: 50%;
  }
  
  @media screen and (max-width: 550px) {
    width: 75%;
    max-width: initial;
  }
`

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 20px;
  }
`

