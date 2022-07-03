import React from "react";
import "./header.scss";
import {ArrowRight, EmailIcon, GithubIcon, TelegramIcon} from "@/components/icons/icons";

export const Header: React.FC = () => {
    return <nav>
        <div className="logo">
            <a href="/">
                <img src="/images/logo.png" alt="zotov logo" />
            </a>
        </div>
        <div className="content-nav">
            <div className="social">
                <a href="https://t.me/zotovy" target="_blank" rel="noreferrer">
                    <TelegramIcon width={23}/>
                </a>
                <a href="https://www.github.com/zotovy" target="_blank" rel="noreferrer">
                    <GithubIcon width={23} />
                </a>
                <a href="mailto:hello@zotov.dev" target="_blank" rel="noreferrer">
                    <EmailIcon width={23} />
                </a>
            </div>
            <div className="menu">
                <a href="/about">
                    About & Services
                    <ArrowRight width={20} height={11} />
                </a>
            </div>
        </div>
    </nav>
}