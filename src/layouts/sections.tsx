import Title from "@/components/Title"
import { css } from "styled-components";

const SectionLayoutStyles = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
  
  ${ Title } {
    text-align: center;
    margin-bottom: 50px;
  }
`;

export default SectionLayoutStyles;
