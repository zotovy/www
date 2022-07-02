import React from "react"
import styled from "styled-components"
import CardShadowStyle from "@/components/card-shadow";

export type Props = {
  icon: string;
  href: string;
  title: string;
}

const ContactBadge: React.FC<Props> = (props) => {
  return <a href={ props.href } target="_blank">
    <Container className="contact-badge">
      <Icon alt="" width={36} height={36} src={ props.icon } />
      <Title>{ props.title }</Title>
    </Container>
  </a>
}

export default ContactBadge

const Icon = styled.img`
  width: 36px;
  margin-right: 10px;
  fill: var(--primary);
`

const Title = styled.span`
  font-size: 18px;
  line-height: 22px;
  color: var(--text);
`

const Container = styled.div`
  background: #FFFFFF;
  border: 1px solid #EAEAEA;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 17px;
  width: 232px;
  display: flex;
  align-items: center;
  
  ${CardShadowStyle};
`

