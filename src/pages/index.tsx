import React from "react"
import Seo from "seo";
import Header from "@/components/header";
import MainSection from "@modules/index/main-section";
import CasesSection from "@modules/index/cases-section";

export default function IndexPage() {
  return <div className="content">
    <Seo/>
    <Header/>
    <MainSection/>
    <CasesSection/>
  </div>
}
