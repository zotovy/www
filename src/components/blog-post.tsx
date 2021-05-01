import React from "react";
import styled from "styled-components";

export type Props = {
  image: string;
  title: string;
  subtitle: string;
}

const BlogPost: React.FC<Props> = (props) => {
    return <Container>
      <Image url={props.image} />
      <Title>{ props.title }</Title>
      <Subtitle>{ props.subtitle }</Subtitle>
    </Container>
}

export default BlogPost;

const Image = styled.div<{ url: string }>`
  width: 100%;
  padding-top: 65%;
  border-radius: 15px;
  margin-bottom: 25px;
  background-image: url(${ props => props.url });
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 300ms;
  transition-delay: 300ms;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;

const Title = styled.h5`
  font-weight: 500;
  font-size: 24px;
  color: var(--text);
  margin-bottom: 15px;
  
  @media screen and (max-width: 960px) {
      font-size: 20px;
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  line-height: 32px;
  color: var(--secondary);

  @media screen and (max-width: 960px) {
    font-size: 18px;
    line-height: 32px;
  }
`;

const Container = styled.div`
`;

