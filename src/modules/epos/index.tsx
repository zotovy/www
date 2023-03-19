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
import {Helmet} from "react-helmet";

export function EposProject() {
    useEffect(() => {
        document.body.style.background = "#f3f2f4"
    }, [])

    return <div className="epos">
        <Helmet>
            <title>Yaroslav Zotov | Epos Next</title>
        </Helmet>
        
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
                        New Apps for 
                        an Online Educational System
                    </ProjectTitle>

                    <div className="introduction">
                        <span>Introduction</span>
                        <p>
                        Epos Next is a modern education system for the schoolchildren of Perm. I optimized the outdated, slow application and significantly improved the UX.
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
                            Using the old Epos application as a student gave me good knowledge of the target audience.
                            Most of the users surveyed by me noted slow loading speeds and an awkward interface.
                        </p>
                        <p>
                            My first step was to determine why the platform is so slow. I started my work by
                            rebuilding the app's backend and the data caching methods by transferring it to React.
                        </p>
                    </div>
                    <div className="process-list">
                        <div className="item-list">
                            <div className="icon">
                                <img alt="icon research" src="/icons/icon-research.svg"/>
                            </div>
                            <div className="subtitle">Redesigning the experience</div>
                            <p>
                                Students reported having problems with accessing the school's information, viewing the timetable and tracking homework.
                                The goal was to simplify the UX and improve the product with new features. 
                            </p>
                        </div>
                        <div className="item-list">
                            <div className="icon">
                                <img alt="icon wireframe" src="/icons/icon-wireframes.svg"/>
                            </div>
                            <div className="subtitle">Adding new features</div>
                            <p>
                                During the redesign process, it became clear that several new features needed to be
                                added. I made a built-in tasks list, announcements for the entire class, and reminders
                                of the test and exam dates.
                            </p>
                        </div>
                        <div className="item-list">
                            <div className="icon">
                                <img alt="icon prototype" src="/icons/icon-prototype.svg"/>
                            </div>
                            <div className="subtitle">Improving performance</div>
                            <p>
                                The redesign of the backend increased the performance of the entire system. 
                                Caching was added on the client side, which allowed the app to work offline.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="technologies">
                    <div className="title-container">
                        <span className="number">02</span>
                        <span className="title">Technologies</span>
                        <p>
                        The old website was written in Angular with a PHP backend. 
                        The outdated technologies didn't allow performance increases, so
                        I created a new version based on React and .NET.
                        </p>
                        <p>
                            Kotlin Multiplatform was the technology for the mobile app.
                            Despite the technology having been recently released, it was good.
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
                                <GatsbyLogo/>
                                <div className="tech-info">
                                    <span>Gatsby.js</span>
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
                                        Developer platform with tools and libraries for building any type of applications,
                                        perfect for an API
                                    </p>
                                </div>
                            </div>
                            <div className="tech-item">
                                <KotlinLogo/>
                                <div className="tech-info">
                                    <span>Kotlin Multiplatform</span>
                                    <p>
                                        SDK for iOS and Android development. Offers the combined benefits of
                                        creating cross-platform and native apps
                                    </p>
                                </div>
                            </div>
                            <div className="tech-item">
                                <img src="/icons/jetpack-compose.png" alt="jetpack compose logo"/>
                                <div className="tech-info">
                                    <span>Jetpack compose</span>
                                    <p>
                                        Android's modern toolkit for native UI. Simplifies and accelerates
                                        UI development
                                    </p>
                                </div>
                            </div>
                            <div className="tech-item">
                                <SwiftLogo/>
                                <div className="tech-info">
                                    <span>Swift UI</span>
                                    <p>
                                        User interface framework for Apple operating systems
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
                        The website consists of a dashboard page and a page with grades. The most important information is on the dashboard: 
                        the next lesson, the countdown until the lesson, homework, tests, and announcements. 
                        The sidebar contains today's lesson schedule with the latest grades.
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
                            Mobile version of Epos. Available on iOS & Android.
                        </p>
                        <div className="screenshot">
                            <img src="/images/epos/mobile.png" alt="mobile app screenshots"/>
                        </div>
                    </div>
                </section>

                <section id="open-source">
                    <div className="title-container">
                        <span className="number">03</span>
                        <span className="title">It's Open-Source</span>
                        <p>
                            The project's assets are open-source and available on GitHub.
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
                            <span className="title">Some newly developed features</span>
                            <p>
                                Together with the redesign, I added some new features
                            </p>
                        </div>

                        <div className="right">
                            <li>
                                <div className="subtitle">The Next Lesson</div>
                                <p>Information about the next lesson with the classroom number and a countdown until its start</p>
                            </li>
                            <li>
                                <div className="subtitle">Tests and Exams</div>
                                <p>Reminders about upcoming tests and exams</p>
                            </li>
                            <li>
                                <div className="subtitle">School Announcements</div>
                                <p>Impoкtant school announcements for students</p>
                            </li>
                            <li>
                                <div className="subtitle">Task List</div>
                                <p>The ability to mark a hometask as completed</p>
                            </li>
                            <li>
                                <div className="subtitle">Dark Mode</div>
                                <p>A cool dark mode for less eye strain</p>
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


