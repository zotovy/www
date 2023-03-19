import React, { useEffect } from "react";
import "./styles.scss"
import { Helmet } from "react-helmet";
import Header from "@/components/header";
import ProjectTitle from "@/components/project-title/project-title";
import {
    ArrowLeft,
    LinkIcon, 
    NextJsLogo,
    ReactIcon,
    ThanksForWatching
} from "@/components/icons/icons";
import { Link } from "gatsby";


export function RocketWorkCredit() {
    useEffect(() => {
        document.body.style.background = "white"
    }, [])
    
    return <div className="credit">
        <Helmet>
            <title>Yaroslav Zotov | Rocket Work Credit</title>
        </Helmet>

        <div className="credit-container">
            <main>
                <Header variant="light"/>

                <div className="content">
                    <div className="tag">
                        <span className="num">01</span>
                        <span className="dash">&mdash;&mdash;&mdash;</span>
                        <span className="name">Rocket Work Credit</span>
                    </div>

                    <ProjectTitle>
                        A Landing and a CRM System 
                        for Rocket Work
                    </ProjectTitle>

                    <div className="introduction">
                        <span>Introduction</span>
                        <p>
                            Rocket Work is a service for working with self-employed and freelancer. 
                            You can make mass payments to freelancers, sign contracts, acts, collect checks, choose
                            workers on the platform and invite your own.
                        </p>
                    </div>

                    <div className="information">
                        <div className="year">
                            <span>Year</span>
                            <p>2022</p>
                        </div>
                        <div className="type">
                            <span>Work</span>
                            <p>Freelance</p>
                        </div>
                        <div className="url">
                            <span>Link</span>
                            <a href="https://credit.rocketwork.ru" target="_blank" rel="noreferrer">
                                Website <LinkIcon/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="previews">
                    <div className="preview-1">
                        <img alt="dashboard" src="/images/credit/main.png"/>
                    </div>

                    <div className="preview-2">
                        <img alt="mobile home page" src="/images/credit/mobile.png"/>
                    </div>
                </div>
            </main>

            <div className="page-content">
                <section id="introduction">
                    <div className="title-container">
                        <span className="number">01</span>
                        <span className="title">Introduction</span>
                        <p>
                            Rocket Work launched a new project to issue loans to the self-employed. 
                            I developed a landing page and an internal admin panel for the bank employees and managers.
                        </p>
                        <p>
                            The landing page is a one-page ad website with a form for a loan application. 
                            The CRM system is used by employees to quickly process the applications.
                        </p>
                        <p>
                            I developed a website and an internal service for applications with 
                            Next.js. I was the project's main frontend developer.
                        </p>
                    </div>
                    <div className="process-list">
                        <div className="item-list">
                            <div className="icon">
                                <img alt="icon prototype" src="/icons/icon-prototype.svg"/>
                            </div>
                            <div className="subtitle">Improving productivity</div>
                            <p>
                                The CRM system allowed employees to process applications faster and draw up a loan 
                                agreement. A process that used to take several hours was now done in minutes. This helps  
                                save money on employees.
                            </p>
                        </div>
                        <div className="item-list">
                            <div className="icon">
                                <img alt="icon wireframe" src="/icons/icon-wireframes.svg"/>
                            </div>
                            <div className="subtitle">Launching a new product</div>
                            <p>
                                Issuing loans to the self-employed is a new and promising project for Rocket Work.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="technologies">
                    <div className="title-container">
                        <span className="number">02</span>
                        <span className="title">Technologies</span>
                        <p>
                            The website was written in Next.js using TypeScript. The CRM system used a Vuexy template.
                        </p>

                        <div className="technologies">
                            <div className="tech-item">
                                <ReactIcon/>
                                <div className="tech-info">
                                    <span>React</span>
                                    <p>
                                        Open-source front-end JavaScript library for building user interfaces based
                                        on UI components
                                    </p>
                                </div>
                            </div>
                            <div className="tech-item">
                                <NextJsLogo/>
                                <div className="tech-info">
                                    <span>Next.js</span>
                                    <p>
                                        React-based open source framework with performance, scalability and security
                                        built-in
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="web">
                    <div className="text-column">
                        <div className="subtitle">Landing</div>
                        <p>
                            A one-page ad website with a form for a loan application.
                        </p>
                    </div>

                    <div className="screenshot">
                        <img src="/images/credit/landing.png" alt="landing"/>
                        <figcaption>Landing</figcaption>
                    </div>
                </section>

                <section id="mobile">
                    <div className="text-column">
                        <div className="subtitle">The CRM system</div>
                        <p>
                            An internal system for Rocket Work employees that allows them to interact with applications.
                            Due to the company's security policy, I can't show the internal admin panel.
                        </p>
                        <div className="screenshot">
                            <img src="/images/credit/crm.png" alt="crm login page screenshot"/>
                        </div>
                    </div>
                </section>
                
                <section id="features">
                    <div className="features-container">
                        <div className="left">
                            <span className="title">Some newly developed features</span>
                            <p>
                                Some features of the landing and the CRM system
                            </p>
                        </div>

                        <div className="right">
                            <li>
                                <div className="subtitle">Application Management</div>
                                <p>Employees can manage loan requests, reject or approve them</p>
                            </li>
                            <li>
                                <div className="subtitle">ACL</div>
                                <p>The user and roles of the CRM system are fully editable</p>
                            </li>
                            <li>
                                <div className="subtitle">Tasks List</div>
                                <p>The list of tasks in the CRM system is available to employees</p>
                            </li>
                            <li>
                                <div className="subtitle">Dark Mode</div>
                                <p>The CRM system has support for both dark and light themes</p>
                            </li>
                        </div>
                    </div>
                </section>
            </div>

            <section id="thanks">
                <div className="prefooter">
                        <span>
                           <ThanksForWatching/>
                            Thanks for watching!
                        </span>
                    <Link to="/" className="home">
                        <ArrowLeft/>
                        Back home
                    </Link>
                </div>
            </section>
        </div>
    </div>
}