import styled from "styled-components";

const H1 = styled.h1`
  margin-top: 40px;
  width: 100%;
  z-index: 30;
  position: relative;
  color: var(--text);
  font-family: "Averta", sans-serif;
  font-size: 7vw;
  line-height: 9vw;

  &::selection {
    background-color: #b6cfff;
  }

  @media (min-width: 1500px) {
    font-size: 110px;
    line-height: 130px;
  }
`;

export default H1