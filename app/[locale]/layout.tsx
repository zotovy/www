import "@/app/styles/normalize.css"
import "@/app/styles/fonts.scss"
import "@/app/styles/globals.scss"
import "@/app/styles/colors.scss"
import { ReactNode } from "react";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata = {
    title: 'Yaroslav Zotov',
    description: 'Yaroslav Zotov website',
    icons: {
        icon: [
            {
                media: '(prefers-color-scheme: light)',
                url: '/favicon.icon',
            },
            {
                media: '(prefers-color-scheme: dark)',
                url: '/favicon-light.icon',
            },
        ],
    },
}

type RootLayoutProps = {
    children: ReactNode,
    params: {
        locale: string,
    }
}

export default async function RootLayout({children, params: { locale }}: RootLayoutProps) {
    unstable_setRequestLocale(locale);
    
    return (
        <html lang={locale}>
        <head>
            <link rel="icon" href="/public/favicon.ico" sizes="any" />
        </head>
        <body>{ children }</body>
        </html>
    )
}

const locales = ['en', 'ru'];

export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
}
