import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Section1 from "@/sections/section-1"
import Section2 from "@/sections/section-2"
import Section3 from "@/sections/section-3"
import Section4 from "@/sections/section-4"
import Section5 from "@/sections/section-5"
import Section6 from "@/sections/section-6"
import Seo from "../seo";

const Container = styled.div`

`

export default function IndexPage() {
  return <Container>
    <Helmet>
      <title>Yaroslav Zotov | Fullstack developer</title>
      <Seo/>
    </Helmet>
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
  </Container>
}
