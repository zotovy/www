import React, { useEffect } from "react"
import "./styles.scss"
import ProjectTitle from "@/components/project-title/project-title";
import Header from "@/components/header";
import {
    ArrowLeft,
    FastApi, FlutterIcon,
    LinkIcon, NextJsLogo,
    ReactIcon,
    TensorflowIcon,
    ThanksForWatching
} from "@/components/icons/icons";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

export function LumiProject() {
    useEffect(() => {
        document.body.style.background = "#f3f2f4"
    }, [])

    return <div className="lumi">
        <Helmet>
            <title>Yaroslav Zotov | Lumi</title>
        </Helmet>

        <div className="lumi-container">
            <main>
                <Header variant="light"/>

                <div className="content">
                    <div className="tag">
                        <span className="num">03</span>
                        <span className="dash">&mdash;&mdash;&mdash;</span>
                        <span className="name">Lumi</span>
                    </div>

                    <ProjectTitle>
                        A Qualified Medical
                        Second Opinion Service
                    </ProjectTitle>

                    <div className="introduction">
                        <span>Introduction</span>
                        <p>
                        Lumi is my team's project for an IT project contest. It is a qualified medical second opinion, helping doctors diagnose diseases using AI.
                        </p>
                    </div>

                    <div className="information">
                        <div className="year">
                            <span>Year</span>
                            <p>2022</p>
                        </div>
                        <div className="type">
                            <span>Work</span>
                            <p>Startup</p>
                        </div>
                        <div className="url">
                            <span>Link</span>
                            <a href="https://lumi.zotov.dev" target="_blank" rel="noreferrer">
                                Website <LinkIcon/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="previews">
                    <div className="preview-1">
                        <img alt="dashboard" src="/images/lumi/dashboard.png"/>
                    </div>

                    <div className="preview-2">
                        <img alt="mobile home page" src="/images/lumi/dashboard-mobile.png"/>
                    </div>
                </div>
            </main>

            <div className="page-content">
                <section id="introduction">
                    <div className="title-container">
                        <span className="number">01</span>
                        <span className="title">Introduction</span>
                        <p>
                        The average accuracy of correct diagnoses by doctors is about 75%. Modern neural networks are able to diagnose diseases no worse than a human. 
                        My team developed a service that can diagnose dangerous kidney formations, brain tumors, and skin cancers with the feature of deciphering analyses.
                        </p>
                        <p>
                            Our first step was training the neural networks. At the same time, 
                            we developed a user interface for a website and a mobile app.
                        </p>
                    </div>
                    <div className="process-list">
                        <div className="item-list">
                            <div className="icon">
                                <img alt="icon research" src="/icons/improve.svg"/>
                            </div>
                            <div className="subtitle">Improving the accuracy</div>
                            <p>
                                The goal was to offer hospitals a qualified second opinion service that doctors could consult before making a diagnosis. 
                                Often, there are situations where the doctor doesn't notice the small details. Lumi, however, can notice these.
                            </p>
                        </div>
                        <div className="item-list">
                            <div className="icon">
                                <img alt="icon wireframe" src="/icons/time.svg"/>
                            </div>
                            <div className="subtitle">Reducing the waiting time</div>
                            <p>
                                Waiting for the transcription of tests or tomography can take a lot of time. 
                                Lumi has the ability to return an answer within seconds.
                            </p>
                        </div>
                        <div className="item-list">
                            <div className="icon">
                                <img alt="icon prototype" src="/icons/data.svg"/>
                            </div>
                            <div className="subtitle">Organizing the patient's data</div>
                            <p>
                                During the development of Lumi, we added a feature that doctors could use to organize their clients' data.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="technologies">
                    <div className="title-container">
                        <span className="number">02</span>
                        <span className="title">Technologies</span>

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
                            <div className="tech-item">
                                <FastApi/>
                                <div className="tech-info">
                                    <span>FastAPI</span>
                                    <p>
                                        Fast and modern, high-performance web framework for building APIs with Python
                                    </p>
                                </div>
                            </div>
                            <div className="tech-item">
                                <TensorflowIcon/>
                                <div className="tech-info">
                                    <span>TensorFlow</span>
                                    <p>
                                        Free and open-source software library for ML and AI
                                    </p>
                                </div>
                            </div>
                            <div className="tech-item">
                                <FlutterIcon/>
                                <div className="tech-info">
                                    <span>Flutter</span>
                                    <p>
                                        An open source framework by Google for building beautiful, natively compiled,
                                        multi-platform applications from a single codebase
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="web">
                    <div className="text-column">
                        <div className="subtitle">Web App</div>
                        <p>
                            The website consists of a patients data list and pages with different types of diagnoses.
                        </p>
                    </div>

                    <div className="screenshot">
                        <img src="/images/lumi/screenshot-1.png" alt="login"/>
                        <figcaption>Login</figcaption>
                    </div>

                    <div className="screenshot">
                        <img src="/images/lumi/screenshot-2.png" alt="Signup (stage 1)"/>
                        <figcaption>Signup (stage 1)</figcaption>
                    </div>

                    <div className="screenshot">
                        <img src="/images/lumi/screenshot-3.png" alt="Signup (stage 2)"/>
                        <figcaption>Signup (stage 2)</figcaption>
                    </div>

                    <div className="screenshot">
                        <img src="/images/lumi/screenshot-4.png" alt="Patients list"/>
                        <figcaption>Patients list</figcaption>
                    </div>

                    <div className="screenshot">
                        <img src="/images/lumi/screenshot-5.png" alt="Skin cancer page"/>
                        <figcaption>Skin cancers</figcaption>
                    </div>
                    
                    <div className="screenshot">
                        <img src="/images/lumi/screenshot-6.png" alt="Brain tumors page"/>
                        <figcaption>Brain tumors</figcaption>
                    </div>

                    <div className="screenshot">
                        <img src="/images/lumi/screenshot-7.png" alt="Kidney neoplasms page"/>
                        <figcaption>Kidney neoplasms</figcaption>
                    </div>

                    <div className="screenshot">
                        <img src="/images/lumi/screenshot-8.png" alt="Analyses decoding page"/>
                        <figcaption>Analyses decoding</figcaption>
                    </div>

                    <div className="screenshot">
                        <img src="/images/lumi/screenshot-9.png" alt="Patient creation page"/>
                        <figcaption>Patient creation</figcaption>
                    </div>
                </section>

                <section id="mobile">
                    <div className="text-column">
                        <div className="subtitle">Mobile App</div>
                        <p>
                            Mobile version of Lumi. Available on iOS & Android.
                        </p>
                        <div className="screenshot">
                            <img src="/images/lumi/screenshot-10.png" alt="mobile app screenshots"/>
                        </div>
                    </div>
                </section>

                {/*<section id="open-source">*/}
                {/*    <div className="title-container">*/}
                {/*        <span className="number">03</span>*/}
                {/*        <span className="title">Its Open-Source</span>*/}
                {/*        <p>*/}
                {/*            All the code of web, mobile & backend applications is available on Github*/}
                {/*        </p>*/}
                {/*    </div>*/}
                
                {/*    <div className="img-cols-2">*/}
                {/*        <figure className="link">*/}
                {/*            <Link to="https://github.com/epos-next/web">*/}
                {/*                <img src="/images/epos/github-web.png" alt="Web app github link"/>*/}
                {/*            </Link>*/}
                {/*        </figure>*/}
                {/*        <figure className="link">*/}
                {/*            <Link to="https://github.com/epos-next/mobile">*/}
                {/*                <img src="/images/epos/github-mobile.png" alt="Mobile app github link"/>*/}
                {/*            </Link>*/}
                {/*        </figure>*/}
                {/*    </div>*/}
                {/*</section>*/}

                <section id="features">
                    <div className="features-container">
                        <div className="left">
                            <span className="title">Some newly developed features</span>
                            <p>
                                We added a wide variety of features for doctors and patients
                            </p>
                        </div>

                        <div className="right">
                            <li>
                                <div className="subtitle">Patients List</div>
                                <p>All of the patient's information in one place</p>
                            </li>
                            <li>
                                <div className="subtitle">Kidney Diagnostics</div>
                                <p>Automatic diagnosis of dangerous neoplasms using a kidney CT skan</p>
                            </li>
                            <li>
                                <div className="subtitle">Brain Diagnostics</div>
                                <p>Automatic diagnosis of cancer using an MRI scan of the brain</p>
                            </li>
                            <li>
                                <div className="subtitle">Skin Diagnostics</div>
                                <p>Automatic diagnosis of skin cancers using a photo of a tumor</p>
                            </li>
                            <li>
                                <div className="subtitle">Analyses Decoding</div>
                                <p>Automatic detection of cardiovascular diseases using analyses</p>
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


