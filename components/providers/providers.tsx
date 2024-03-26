'use client'

import { FC, ReactNode } from "react";
import { ThemeProvider } from "next-themes";

export type ProvidersProps = {
    children: ReactNode,
}

export const Providers: FC<ProvidersProps> = (props) => {
    return <ThemeProvider>
        { props.children }
    </ThemeProvider>
}