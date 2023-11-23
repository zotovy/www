import React, { FC, memo } from "react";
import "./contacts-section.scss"
import { Link } from "@/components/link/link";
import { LinkIcon } from "@/components/svgs";
import { motion } from "framer-motion";
import { fadeInAnimation } from "@/components/typography/typography";

export type ContactsSectionProps = {}

export const ContactsSection: FC<ContactsSectionProps> = memo(() => {
    return <section className="contact-contacts-section">
        <motion.div style={ {display: "flex"} } { ...fadeInAnimation }>
            <Link size={ 72 } href="mailto:zotov.dev" className="email">hello@zotov.dev</Link>
        </motion.div>
        <div className="links">
            <motion.div style={ {display: "flex"} } { ...fadeInAnimation }>
                <Link href="https://t.me/zotovy">Telegram<LinkIcon/></Link>
            </motion.div>
            <motion.div style={ {display: "flex"} } { ...fadeInAnimation }>
                <Link href="https://github.com/zotovy">Github<LinkIcon/></Link>
            </motion.div>
            <motion.div style={ {display: "flex"} } { ...fadeInAnimation }>
                <Link href="mailto:hello@zotov.dev">Email<LinkIcon/></Link>
            </motion.div>
        </div>
    </section>
})