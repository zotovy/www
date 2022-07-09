import React, {useEffect} from "react"
import "./styles.scss"
import ProjectTitle from "@/components/project-title/project-title";
import Header from "@/components/header";
import {
    ArrowLeft,
    DotnetIcon,
    GatsbyLogo,
    KotlinLogo,
    LinkIcon,
    ReactIcon,
    SwiftLogo,
    ThanksForWatching
} from "@/components/icons/icons";
import {Link} from "gatsby";

export function EposProject() {
    useEffect(() => {
        document.body.style.background = "#f3f2f4"
    }, [])

    return <div className="epos">
        <div className="epos-container">
            <main>
                <Header variant="light"/>

                <div className="content">
                    <div className="tag">
                        <span className="num">01</span>
                        <span className="dash">&mdash;&mdash;&mdash;</span>
                        <span className="name">Epos Next</span>
                    </div>

                    <ProjectTitle>
                        Creating Modern
                        School Platform
                    </ProjectTitle>

                    <div className="introduction">
                        <span>Introduction</span>
                        <p>
                            Epos Next is a modern education platform for Perm schoolchildren. I have reworked the
                            outdated
                            slower application, significantly speeding up the work and improve UX.
                        </p>
                    </div>

                    <div className="information">
                        <div className="year">
                            <span>Year</span>
                            <p>2021</p>
                        </div>
                        <div className="type">
                            <span>Work</span>
                            <p>Freelance</p>
                        </div>
                        <div className="url">
                            <span>Link</span>
                            <a href="https://epos.zotov.dev" target="_blank" rel="noreferrer">
                                Website <LinkIcon/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="previews">
                    <div className="preview-1">
                        <img alt="dashboard" src="/images/epos/dashboard.png"/>
                    </div>

                    <div className="preview-2">
                        <img alt="mobile home page" src="/images/epos/mobile-home.png"/>
                    </div>
                </div>
            </main>

            <div className="page-content">
                <section id="introduction">
                    <div className="title-container">
                        <span className="number">01</span>
                        <span className="title">Introduction</span>
                        <p>
                            Using the old Epos application as a student gave me good knowledge to target and audience.
                            It was not difficult for me to interview other students and teachers and quickly understand
                            what platform they want to see from me. Most of the users noted the slow loading speed and
                            awkward interface.
                        </p>
                        <p>
                            My first step was to determine why the platform is running so slowly. I started my work by
                            redesign the backend and data caching methods, refusal to use the Angular and transfer the
                            application to React.
                        </p>
                    </div>
                    <div className="process-list">
                        <div className="item-list">
                            <div className="icon">
                                <img alt="icon research" src="/icons/icon-research.svg"/>
                            </div>
                            <div className="subtitle">Redesigning the experience</div>
                            <p>
                                The goal was to reduce the friction users experienced and improve the product with new
                                features. Students had problems accessing school information and tracking homework and
                                lesson schedules
                            </p>
                        </div>
                        <div className="item-list">
                            <div className="icon">
                                <img alt="icon wireframe" src="/icons/icon-wireframes.svg"/>
                            </div>
                            <div className="subtitle">Adding features</div>
                            <p>
                                During the redesign process, it became clear that several new features needed to be
                                added. I've made a built-in task list, announcements for the entire class, and reminders
                                of test and exam dates
                            </p>
                        </div>
                        <div className="item-list">
                            <div className="icon">
                                <img alt="icon prototype" src="/icons/icon-prototype.svg"/>
                            </div>
                            <div className="subtitle">Improving performance</div>
                            <p>
                                We redesigned the backend and accelerated the speed of the entire platform several
                                times. On the client side, caching was added and allowed the application to work offline
                            </p>
                        </div>
                    </div>
                </section>

                <section id="technologies">
                    <div className="title-container">
                        <span className="number">02</span>
                        <span className="title">Technologies</span>
                        <p>
                            Website was written in angular, and the backend in php.
                            It would be problematic to achieve the desired speed with such technologies, so
                            I created a new version based on React and .NET.
                        </p>
                        <p>
                            Kotlin Multiplatform was chosen as the technology for the mobile application.
                            Despite the fact that the technology recently received its first official
                            release, it showed itself very well.
                        </p>

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
                                <GatsbyLogo/>
                                <div className="tech-info">
                                    <span>Gatsby.JS</span>
                                    <p>
                                        React-based open source framework with performance, scalability and security
                                        built-in
                                    </p>
                                </div>
                            </div>
                            <div className="tech-item">
                                <DotnetIcon/>
                                <div className="tech-info">
                                    <span>.NET</span>
                                    <p>
                                        Developer platform with tools and libraries for building any type of app,
                                        perfect for API
                                    </p>
                                </div>
                            </div>
                            <div className="tech-item">
                                <KotlinLogo/>
                                <div className="tech-info">
                                    <span>Kotlin Multiplatform</span>
                                    <p>
                                        SDK for iOS and Android app development. It offers all the combined benefits of
                                        creating cross-platform and native apps
                                    </p>
                                </div>
                            </div>
                            <div className="tech-item">
                                <img src="/icons/jetpack-compose.png" alt="jetpack compose logo"/>
                                <div className="tech-info">
                                    <span>Jetpack compose</span>
                                    <p>
                                        Android's modern toolkit for building native UI. It simplifies and accelerates
                                        UI development on android.
                                    </p>
                                </div>
                            </div>
                            <div className="tech-item">
                                <SwiftLogo/>
                                <div className="tech-info">
                                    <span>Swift UI</span>
                                    <p>
                                        A modern way to declare user interfaces for any Apple platform.
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
                            The website consists of a dashboard page and a page with student grades. Immediately after
                            opening the application, all the information that the user may need is in front of his eyes.
                            The next lesson, the timer before the start, homework, tests and class announcements. The
                            sidebar contains a lesson schedule with the latest grades
                        </p>
                    </div>

                    <div className="screenshot">
                        <img src="/images/epos/screenshot-1.png" alt="dashboard"/>
                        <figcaption>Dashboard</figcaption>
                    </div>

                    <div className="screenshot">
                        <img src="/images/epos/screenshot-2.png" alt="grades"/>
                        <figcaption>Student grades</figcaption>
                    </div>

                    <div className="screenshot">
                        <img src="/images/epos/screenshot-3.png" alt="create advertisement modal"/>
                        <figcaption>Create advertisement modal</figcaption>
                    </div>

                    <div className="screenshot">
                        <img src="/images/epos/screenshot-4.png" alt="create test modal"/>
                        <figcaption>Create test modal</figcaption>
                    </div>

                    <div className="screenshot">
                        <img src="/images/epos/screenshot-5.png" alt="login page"/>
                        <figcaption>Login page</figcaption>
                    </div>
                </section>

                <section id="mobile">
                    <div className="text-column">
                        <div className="subtitle">Mobile App</div>
                        <p>
                            Pocket version of Epos education platform. Available on both IOS & Android.
                        </p>
                        <div className="screenshot">
                            <img src="/images/epos/mobile.png" alt="mobile app screenshots"/>
                        </div>
                    </div>
                </section>

                <section id="open-source">
                    <div className="title-container">
                        <span className="number">03</span>
                        <span className="title">Its Open-Source</span>
                        <p>
                            All the code of web, mobile & backend applications is available on Github
                        </p>
                    </div>

                    <div className="img-cols-2">
                        <figure className="link">
                            <Link to="https://github.com/epos-next/web">
                                <img src="/images/epos/github-web.png" alt="Web app github link"/>
                            </Link>
                        </figure>
                        <figure className="link">
                            <Link to="https://github.com/epos-next/mobile">
                                <img src="/images/epos/github-mobile.png" alt="Mobile app github link"/>
                            </Link>
                        </figure>
                    </div>
                </section>

                <section id="features">
                    <div className="features-container">
                        <div className="left">
                            <span className="title">A few of the features that we shipped</span>
                            <p>
                                Alongside with redesigning platform, I added several new features such as:
                            </p>
                        </div>

                        <div className="right">
                            <li>
                                <div className="subtitle">Next lesson</div>
                                <p>Information about next lesson with timer to start and room</p>
                            </li>
                            <li>
                                <div className="subtitle">Test & Exams</div>
                                <p>Reminder for all class about some test or exam</p>
                            </li>
                            <li>
                                <div className="subtitle">Announcements</div>
                                <p>Reminder for all class about some important organization information</p>
                            </li>
                            <li>
                                <div className="subtitle">Task List</div>
                                <p>Add ability to mark homework item as completed</p>
                            </li>
                            <li>
                                <div className="subtitle">Dark Mode</div>
                                <p>Add cool dark mode for fans of murky colors</p>
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


