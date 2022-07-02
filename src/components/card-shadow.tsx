import {css} from "styled-components";

export const CardShadowTransition = `box-shadow 400ms ease`

const CardShadowStyle = css`
  transition: ${CardShadowTransition};

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`

export default CardShadowStyle