import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';

export const {Link, redirect, usePathname, useRouter} =
    createLocalizedPathnamesNavigation({
        locales: ['en', 'ru'] as const,
        pathnames: { '/': '/' },
        localePrefix: undefined,
    });