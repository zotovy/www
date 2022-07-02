import React from "react"
import Link from 'gatsby-link'
import styled from "styled-components"
import Button from "@/components/button"
import SectionLayoutStyles from "../layouts/sections"

export default function Main() {
  return <Section>
    <RightSide>
      <Title>Developer you were looking for </Title>
      <Subtitle>Hi! I’m Yaroslav Zotov. Fullstack Developer based in Russia.</Subtitle>
      <Buttons>
        <Link to="https://linkup.zotov.dev/zotovy" target="_blank">
          <Button type="primary">Contact Me</Button>
        </Link>
        <Link to="#my-projects-section">
          <Button type="secondary">My Works</Button>
        </Link>
      </Buttons>
    </RightSide>
    <Image alt="" src="images/section-1.png" draggable={false} />
  </Section>
}

const Title = styled.h1`
  font-weight: bold;
  font-size: 54px;
  line-height: 81px;
  margin-bottom: 20px;
  max-width: 444px;
  color: var(--text);
  animation: fadeTitle 1s ease; 
  animation-fill-mode: both;
  
  @keyframes fadeTitle {
    from {
      transform: translateY(100px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media screen and (min-width: 790px) and (max-width: 960px) {
    line-height: 72px;
    font-size: 48px;
  }

  @media screen and (max-width: 790px) {
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
  animation: fadeSubtitle 1s ease;
  animation-fill-mode: both;
  animation-delay: 300ms;

  @keyframes fadeSubtitle {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media screen and (min-width: 790px) and (max-width: 960px) {
    line-height: 26px;
    font-size: 18px;
  }

  @media screen and (max-width: 790px) {
    text-align: center;
    font-size: 17px;
    line-height: 25px;
    max-width: 345px;
  }
`

const Buttons = styled.div`
  display: flex;
  margin-top: 30px;
 
  @keyframes fadeButton {
    from {
      transform: translateY(40px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .button[data-type=primary] {
    margin-right: 40px;
    animation: fadeButton 1s ease;
    animation-fill-mode: both;
    animation-delay: 600ms;
  }

  .button[data-type=secondary] {
    animation: fadeButton 1s ease;
    animation-fill-mode: both;
    animation-delay: 800ms;
  }
  
  @media screen and (max-width: 790px) {
    width: 100%;
    flex-direction: column;
    
    .button {
      width: auto !important;
    }
    
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
  animation: fade 1s ease;
  animation-fill-mode: both;
  
  @media screen and (max-width: 790px) {
      width: 90%;
  }
  
  @keyframes fade {
    from {
      opacity: 0;
    }
    to { 
      opacity: 1;
    }
  }
`

const RightSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 790px) {
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
  overflow: hidden;
  ${ SectionLayoutStyles };

  @media screen and (max-width: 790px) {
    flex-direction: column-reverse;
    padding: 20px;
    margin-bottom: 100px;
  }
`

