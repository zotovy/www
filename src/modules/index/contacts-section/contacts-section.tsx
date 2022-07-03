import React from "react";
import "./contacts-section.scss";
import ContactButton from "@/components/buttons/contact-button";

export const ContactsSection: React.FC = () => {
    return <div className="contacts">
        <span className="outline-title">Services &amp;&nbsp;Contact</span>
        <div className="contacts-content">
            <div className="about">
                <div className="title">I’m building fullstack apps any size</div>
                <p>
                    Focused on digital design over these years I helped companies and growing startup build apps and
                    websites of all sorts.
                </p>
                <div className="line"/>
                <a href="/about">
                    About &amp; Services
                    <svg width="20" height="11" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.285.668l-.506.506 4.146 4.148H.392v.717h17.533l-4.146 4.147.506.506 5.012-5.012z"
                              fill="#18033C" fill-rule="evenodd"/>
                    </svg>
                </a>
            </div>

            <div className="yeah">
                <div className="tag">Contact</div>

                <span className="title">
                    Interested&nbsp;?<br/>
                    Lets Get In Touch&nbsp;!
                </span>

                <p>
                    You can always send me message on&nbsp;
                    <a href="https://t.me/zotovy" target="_blank">Telegram</a> or
                    text me with <a href="mailto:hello@zotov.dev" target="_blank">Email</a>.
                    My open-source project you can always find on my&nbsp;
                    <a href="https://github.com/zotovy" target="_blank">Github</a> page
                </p>

                <ContactButton/>
            </div>
        </div>
    </div>
}