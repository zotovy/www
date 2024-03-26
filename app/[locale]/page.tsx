import { Header } from "@/components/header";
import { HeroSection } from "@/sections/hero";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";

type IndexProps = {
    params: {
        locale: string,
    }
}

function Index({params: {locale}}: IndexProps) {
    unstable_setRequestLocale(locale);

    return <main>
        <Header/>
        <HeroSection/>
    </main>
}

export default Index;


export async function generateMetadata({params: {locale}}: IndexProps) {
    const t = await getTranslations({locale, namespace: 'metadata'});

    return {
        title: t('title')
    };
}

