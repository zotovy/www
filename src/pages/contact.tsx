import React, { FC, memo } from "react";
import Seo from "../seo";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { MainSection } from "@/sections/contact/main/main-section";
import { ContactsSection } from "@/sections/contact/contacts/contacts-section";

export type AboutProps = {

}

const Contact: FC<AboutProps> = memo(() => {
    return <div className="content">
        <Seo/>
        <Header/>
        <MainSection/>
        <ContactsSection/>
        <Footer/>
    </div>
})

export default Contact
