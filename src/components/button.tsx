import React from "react"
import styled from "styled-components"

export type Props = {
  type?: "primary" | "secondary",
  children: React.ReactNode
}

const Button: React.FC<Props> = (props) => {
  const type = props.type ?? "primary"

  return <Container data-type={ type } className="button">
    { props.children }
  </Container>
}

export default Button

const Container = styled.button`
  background-color: var(--primary);
  padding: 12px 30px;
  border-radius: 10px;
  box-shadow: 0 9px 27px -10px rgba(0, 99, 255, 0.35);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  cursor: pointer;
  transition: transform 300ms, background-color 300ms;
  text-align: center;
  border: none;

  &:hover {
    background-color: var(--primaryHover);
  }

  &:focus {
    transform: scale(0.95);
  }
  
  &[data-type=secondary] {
    color: var(--primary);
    background-color: var(--primaryLight);
    box-shadow: none;
    
    &:active {
      transform: none;
    }

    &:hover {
      background-color: var(--primaryLightHover);
    }
  }

  @media screen and (min-width: 768px) and (max-width: 960px) {
    padding: 10px 26px;
  }
`
