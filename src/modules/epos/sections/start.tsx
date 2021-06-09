import React from "react"
import { navigate } from "gatsby"
import styled, { keyframes } from "styled-components"

export type Props = {}

const StartSection: React.FC<Props> = () => {
  const goBack = () => navigate(-1)

  return <Container>
    <BackButton onClick={ goBack }>Назад</BackButton>
    <Title>Многофункциональный клиент<br />для школьного дневника Эпос.Школа</Title>
  </Container>
}

export default StartSection

const BackButton = styled.span`
  position: absolute;
  top: 60px;
  left: max(calc((100vw - 1100px) / 2), 20px);
  font-weight: 500;
  font-size: 18px;
  color: #9569FD;
  cursor: pointer;
`

const TextAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Title = styled.h1`
  font-weight: 500;
  font-size: 48px;
  line-height: 59px;
  color: #313131;
  animation: ${ TextAnimation } 1s ease;
  
  @media screen and (max-width: 1120px) {
      padding: 20px;
  }
  
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 36px;
    line-height: 44px;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 30px;
  }
`

const Container = styled.div`
  width: 100%;
  height: 80vh;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`
