import React from "react"
import styled from "styled-components"
import SectionLayoutStyles from "../layouts/sections"
import ContactBadge from "@/components/contact-badge"

export default function Section6() {
  return <Section>
    <ContactBadge href="https://t.me/zotovy" title="telegram" icon="icons/telegram.svg"/>
    <ContactBadge href="mailto:m@zotov.dev" title="m@zotov.dev" icon="icons/email.svg"/>
    <ContactBadge href="https://github.com/zotovY" title="github" icon="icons/github.svg"/>
  </Section>
}

const Section = styled.section`
  ${ SectionLayoutStyles };
  max-width: 766px;
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  
  .contact-badge {
    margin: 0 auto;
  }
`

