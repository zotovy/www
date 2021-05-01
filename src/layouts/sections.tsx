import Title from "@/components/title"
import { css } from "styled-components"

const SectionLayoutStyles = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;

  ${ Title } {
    text-align: center;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 960px) {
    padding: 0 20px;
    margin-right: 0;
    margin-left: 0;
    width: calc(100% - 40px);
  }
`

export default SectionLayoutStyles
