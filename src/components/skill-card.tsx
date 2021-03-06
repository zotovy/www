import React from "react";
import styled from "styled-components"
import CardShadowStyle from "@/components/card-shadow";

export type Props = {
  title: string;
  subtitle: string;
}

const SkillCard: React.FC<Props> = ({ title, subtitle }) => {
  return <Container>
    <Title>{ title }</Title>
    <Subtitle>{ subtitle }</Subtitle>
  </Container>
}

const Title = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #192531;
`;

const Subtitle = styled.p`
  margin-top: 15px;
  font-size: 14px;
  line-height: 17px;
  color: rgba(25, 37, 49, 0.8);
`;

const Container = styled.div`
  background: #FFFFFF;
  border: 1px solid #EAEAEA;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  
  ${CardShadowStyle};
`;

export default SkillCard;
