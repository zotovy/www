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
                        Qualified medical
                        second opinion
                    </ProjectTitle>

                    <div className="introduction">
                        <span>Introduction</span>
                        <p>
                            Lumi is our project for the contest of IT projects "Perspective". This is a qualified
                            second opinion that helps doctors diagnose dangerous diseases with the help of AI.
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
                            The average accuracy of the correct diagnosis by doctors is about 75%. Modern neural
                            networks are able to diagnose diseases no worse than a person. Our team has developed a
                            service that is able to diagnose dangerous kidney formations, brain tumors and skin cancer,
                            and also decipher analyzes.
                        </p>
                        <p>
                            Our first step was to train neural networks. In parallel, we were developing a UI for a
                            website and a mobile application. The service is already available for testing.
                        </p>
                    </div>
                    <div className="process-list">
                        <div className="item-list">
                            <div className="icon">
                                <img alt="icon research" src="/icons/improve.svg"/>
                            </div>
                            <div className="subtitle">Improving accuracy</div>
                            <p>
                                The goal was to provide hospitals with a qualified second opinion that doctors can
                                trust when making a diagnosis. There are often situations when the doctor does not
                                notice the details that the AI can notice.
                            </p>
                        </div>
                        <div className="item-list">
                            <div className="icon">
                                <img alt="icon wireframe" src="/icons/time.svg"/>
                            </div>
                            <div className="subtitle">Reducing waiting time</div>
                            <p>
                                Waiting for the transcription of tests or tomography can take quite a long period of
                                time. Our service is able to give an answer within a few seconds.
                            </p>
                        </div>
                        <div className="item-list">
                            <div className="icon">
                                <img alt="icon prototype" src="/icons/data.svg"/>
                            </div>
                            <div className="subtitle">Organizing patient's data</div>
                            <p>
                                During the development process, we decided to add a patient file so that doctors could
                                also use the service to organize their clients' data.
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
                                    <span>React.JS</span>
                                    <p>
                                        Open-source front-end JavaScript library for building user interfaces based
                                        on UI components
                                    </p>
                                </div>
                            </div>
                            <div className="tech-item">
                                <NextJsLogo/>
                                <div className="tech-info">
                                    <span>Next.JS</span>
                                    <p>
                                        React-based open source framework with performance, scalability and security
                                        built-in
                                    </p>
                                </div>
                            </div>
                            <div className="tech-item">
                                <FastApi/>
                                <div className="tech-info">
                                    <span>Fast Api</span>
                                    <p>
                                        Modern, fast (high-performance), web framework for building APIs with Python
                                    </p>
                                </div>
                            </div>
                            <div className="tech-item">
                                <TensorflowIcon/>
                                <div className="tech-info">
                                    <span>Tensorflow</span>
                                    <p>
                                        Free and open-source software library for machine learning and artificial
                                        intelligence
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
                        <figcaption>Skin cancer</figcaption>
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
                            Pocket version of Lumi service. Available on both IOS & Android.
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
                            <span className="title">A few of the features that we shipped</span>
                            <p>
                                We have contained a lot of functionality for doctors and patients
                            </p>
                        </div>

                        <div className="right">
                            <li>
                                <div className="subtitle">Patients list</div>
                                <p>All patient's information on one page</p>
                            </li>
                            <li>
                                <div className="subtitle">Kidney diagnostic</div>
                                <p>Automatic diagnosis of dangerous neoplasms by kidney CT</p>
                            </li>
                            <li>
                                <div className="subtitle">Brain diagnostic</div>
                                <p>Automatic diagnosis of cancer by MRI of the brain</p>
                            </li>
                            <li>
                                <div className="subtitle">Skin diagnostic</div>
                                <p>Automatic diagnosis of skin cancer based on tumor photos</p>
                            </li>
                            <li>
                                <div className="subtitle">Analyses decoding</div>
                                <p>Automatic detection of cardiovascular diseases by analysis</p>
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


