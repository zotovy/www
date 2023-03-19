import React, {useCallback, useState} from "react";
import "./contact-button.scss";
import {ContactIcon} from "@/components/icons/icons";

const email = "hello@zotov.dev"

export const ContactButton: React.FC = () => {
    const [status, setStatus] = useState("Click to Copy!")

    const handleClick = useCallback(() => {
        navigator.clipboard.writeText(email)
        setStatus("Copied!")
        setTimeout(() => setStatus("Click to Copy!"), 2000);
    }, [])

    return <div className="contact-button" data-status={status} onClick={handleClick}>
        <div className="icon">
            <ContactIcon/>
        </div>
        <span className="mail">{email}</span>
    </div>
}