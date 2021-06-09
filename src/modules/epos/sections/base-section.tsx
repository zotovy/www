import React from "react"
import styled from "styled-components"

export type Props = {
  title: string;
}

const BaseSection: React.FC<Props> = (props) => {
  return <Container>
    <Title>{ props.title }</Title>
    <Text>{ props.children }</Text>
  </Container>
}

export default BaseSection

const Text = styled.span`
  font-weight: 500;
  font-size: 36px;
  line-height: 65px;
  letter-spacing: 0.02em;
  color: #313131;
  width: 100%;
  
  @media screen and (min-width: 768px) and (max-width: 960px) {
    font-size: 28px;
    line-height: 50px;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 42px;
  }
`

const Title = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #313131;
  //flex: 0 0 auto;
  margin-right: 60px;
  margin-top: 15px;

  @media screen and (min-width: 768px) and (max-width: 960px) {
    font-size: 20px;
    line-height: 24px;
    margin-right: 45px;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 29px;
    margin-right: 30px;
  }
`

const Container = styled.section`
  width: 100%;
  height: 80vh;
  max-width: 1100px;
  margin: 400px auto 2vh;
  display: flex;

  @media screen and (max-width: 1120px) {
    padding: 20px;
    width: calc(100% - 40px);
  }
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
