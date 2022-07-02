import React from "react"
import Main from "@/sections/main"
import TechStack from "@/sections/tech-stack"
import AboutMe from "@/sections/about-me"
import MyProjects from "@/sections/my-projects"
import ContactMe from "@/sections/contact-me"
import Seo from "../seo";

export default function IndexPage() {
  return <div>
    <Seo/>
    <Main />
    <TechStack />
    <AboutMe />
    <MyProjects />
    <ContactMe />
  </div>
}
