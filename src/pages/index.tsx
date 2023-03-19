import React, {useEffect} from "react"
import Seo from "seo";
import Header from "@/components/header";
import MainSection from "@modules/index/main-section";
import CasesSection from "@modules/index/cases-section";
import ContactsSection from "@modules/index/contacts-section";

export default function IndexPage() {
  useEffect(() => {
    document.body.style.background = "white"
  }, [])
  
  return <div className="content">
    <Seo/>
    <Header/>
    <MainSection/>
    <CasesSection/>
    <ContactsSection/>
  </div>
}
