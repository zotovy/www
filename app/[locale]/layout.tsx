import { ReactNode } from "react";
import { unstable_setRequestLocale } from "next-intl/server";
import "@/app/styles/normalize.css"
import "@/app/styles/fonts.scss"
import "@/app/styles/globals.scss"
import "@/app/styles/colors.scss"
import { Providers } from "@/components/providers";

export const metadata = {
    title: 'Yaroslav Zotov',
    description: 'Yaroslav Zotov website',
    icons: {
        icon: [
            {
                media: '(prefers-color-scheme: light)',
                url: '/favicon.ico',
            },
            {
                media: '(prefers-color-scheme: dark)',
                url: '/favicon-dark.ico',
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

export default async function RootLayout({children, params: {locale}}: RootLayoutProps) {
    unstable_setRequestLocale(locale);

    return (
        <html lang={ locale } suppressHydrationWarning>
        <head>
            <link rel="icon" href="/favicon.ico" sizes="any" media="(prefers-color-scheme: light)"/>
            <link rel="icon" href="/favicon-dark.ico" sizes="any" media="(prefers-color-scheme: dark)"/>
        </head>
        <body>
        <Providers>
            { children }
        </Providers>
        </body>
        </html>
    )
}

const locales = ['en', 'ru'];

export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
}
