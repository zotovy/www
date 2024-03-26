import { unstable_setRequestLocale, getTranslations } from "next-intl/server";
import { Header } from "@/components/header";
import { HeroSection } from "@/sections/hero";
import { getProjects } from "@/data/projects";
import { ProjectSection } from "@/sections/project";

type IndexProps = {
    params: {
        locale: 'en' | 'ru',
    }
}

function Index({params: {locale}}: IndexProps) {
    unstable_setRequestLocale(locale);

    return <main>
        <Header/>
        <HeroSection/>

        {
            getProjects(locale).map(
                (project, i) => <ProjectSection key={ `project-${ i }-${ locale }` } project={ project }/>
            )
        }
    </main>
}

export default Index;


export async function generateMetadata({params: {locale}}: IndexProps) {
    const t = await getTranslations({locale, namespace: 'metadata'});

    return {
        title: t('title'),
    };
}

