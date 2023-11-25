import React, { FC } from "react";
import Seo from "../seo";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { MainSection } from "@/sections/404/main/main-section";

const Page404: FC = () => {
    return <div className="content">
        <Seo/>
        <Header/>
        <MainSection/>
        <Footer/>
    </div>
}

export default Page404