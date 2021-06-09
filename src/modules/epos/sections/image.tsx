import React from "react";
import styled, { keyframes } from "styled-components"
import { Parallax } from 'react-scroll-parallax';

export type Props = {
  src: string;
}

const ParallaxImage: React.FC<Props> = (props) => {
    return <Parallax y={["-150px", "150px"]}>
      <Image src={props.src} />
    </Parallax>
}

export default ParallaxImage;

const Animation = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;

const Image = styled.img`
  width: 100%;
  animation: ${Animation} 1s ease;
`;
