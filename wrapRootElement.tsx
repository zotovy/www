import React from "react";
import { ParallaxProvider } from 'react-scroll-parallax';

export default ({ element }: any) => {
  return <ParallaxProvider>
    { element }
  </ParallaxProvider>
}
