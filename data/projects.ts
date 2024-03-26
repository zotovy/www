import { Project } from "@/types";

export const projectsEn: Project[] = [
    {
        title: "Spool",
        description: "An application for viewing author's 360 and VR content. Multiplatform mobile app with custom VR player on Flutter.",
        photos: [
            "/images/spool/1.png",
            "/images/spool/2.png",
        ],
    },
    {
        title: "Epos Next",
        description: "Modern education platform for Perm schoolchildren. Reworked the outdated slower application, significantly speeding up the work and improve UX.",
        photos: [
            "/images/epos/1.png",
            "/images/epos/2.png",
        ],
    },
    {
        title: "Rocket Work",
        description: "Service for working with self-employed and other freelance specialists. Here you can make mass payments to freelancers, sign contracts, performers on the platform.",
        photos: [
            "/images/rocketwork/1.png",
        ]
    },
    {
        title: "Phototime",
        description: "Phototime calculates the time of the golden and blue hours, and also shows the weather anywhere in the world. A trusted assistant for any photographer.",
        photos: [
            "/images/phototime/1.png",
            "/images/phototime/2.png",
        ],
    },
];

export const projectsRu: Project[] = [
    {
        title: "Spool",
        description: "В приложении вы можете смотреть эксклюзивный контент в форматах 360 и VR. Кроссплатформенное мобильное приложение с кастомным VR плеером на Flutter.",
        photos: [
            "/images/spool/1.png",
            "/images/spool/2.png",
        ],
    },
    {
        title: "Epos Next",
        description: "Современная образовательная платформа для Пермских школьников. Переработано устаревшее медленное приложение, что значительно ускорило работу и улучшило UX.",
        photos: [
            "/images/epos/1.png",
            "/images/epos/2.png",
        ],
    },
    {
        title: "Rocket Work",
        description: "Сервис для работы с самозанятыми и другими внештатными специалистами. Здесь вы можете осуществлять массовые выплаты фрилансерам, подписывать контракты, исполнителям на платформе.",
        photos: [
            "/images/rocketwork/1.png",
        ],
    },
    {
        title: "Phototime",
        description: "Phototime рассчитывает время золотых и синих часов, а также показывает погоду в любой точке мира. Надежный помощник любого фотографа.",
        photos: [
            "/images/phototime/1.png",
            "/images/phototime/2.png",
        ],
    },
];


export const getProjects = (locale: 'en' | 'ru') => {
    if (locale == 'ru') return projectsRu;
    return projectsEn;
} 
