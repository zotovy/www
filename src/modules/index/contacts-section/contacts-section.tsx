import React from "react";
import "./contacts-section.scss";
import ContactButton from "@/components/buttons/contact-button";

export const ContactsSection: React.FC = () => {
    return <div className="contacts">
        <span className="outline-title">Services &amp;&nbsp;Contacts</span>
        <div className="contacts-content">
            <div className="about">
                <div className="title">I Build Fullstack Apps of Any Size</div>
                <p>
                    Over the years, I have helped companies and upcoming startups build apps and websites of any kind.
                </p>
                <div className="line"/>
                <a href="/about">
                    About Me&amp;and My Services
                    <svg width="20" height="11" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.285.668l-.506.506 4.146 4.148H.392v.717h17.533l-4.146 4.147.506.506 5.012-5.012z"
                              fill="#18033C" fill-rule="evenodd"/>
                    </svg>
                </a>
            </div>

            <div className="yeah">
                <div className="tag">Contacts</div>

                <span className="title">
                    Interested&nbsp;?<br/>
                    Get in Touch with Me&nbsp;!
                </span>

                <p>
                    You can get in contact with me via &nbsp;
                    <a href="https://t.me/zotovy" target="_blank">Telegram</a> or 
                    <a href="mailto:hello@zotov.dev" target="_blank">Email</a>.
                    My open-source projects are on my&nbsp;
                    <a href="https://github.com/zotovy" target="_blank">GitHub</a>.
                </p>

                <ContactButton/>
            </div>
        </div>
    </div>
}