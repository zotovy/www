'use client'

import { FC, memo } from "react";
import styles from "./language-change-button.module.scss";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/utils/router";
import { useLocale } from "next-intl";

export type LanguageChangeButtonProps = {}

export const LanguageChangeButton: FC<LanguageChangeButtonProps> = memo(() => {
    const pathname = usePathname();
    const params = useParams();
    const router = useRouter()
    const locale = useLocale()

    const onClick = () => {
        const nextLocale = locale == 'ru' ? 'en' : 'ru';
        router.replace(
            // @ts-expect-error -- TypeScript will validate that only known `params`
            // are used in combination with a given `pathname`. Since the two will
            // always match for the current route, we can skip runtime checks.
            {pathname, params},
            {locale: nextLocale}
        );
    }

    return <span
        onClick={ onClick }
        className={ styles.button }>
        {
            locale == 'en' ? 'Ru' : 'En'
        }
    </span>
})
