'use server-only';

// Types
import { Dictionary, PersonalDictionary } from '@utils/interfaces';

// Servicesd
import { StringServices } from '@utils/services';

const canonical = 'en';

const alternates = {
    en: 'en-us',
    ja: 'ja-jp',
    pt: 'pt-br',
};

export const getCanonical = (path = '') => {
    if (path.trim().length === 0) {
        return alternates[canonical];
    }

    return `${alternates[canonical]}/${path}`;
};

export const getAlternates = (path = '') => {
    const result: { [key: string]: string } = {};

    Object.keys(alternates)
        .filter((alternate) => alternate !== canonical)
        .forEach((key) => {
            result[key] = `${alternates[key as keyof typeof alternates]}${
                StringServices.isStringValid(path) ? `/${path}` : ''
            }`;
        });

    return result;
};

const locales = {
    'en-us': 'English (US)',
    'pt-br': 'Português (BR)',
    'ja-jp': '日本語',
} as Dictionary;

export const getLocales = () => locales;

const dictionaries = {
    'en-us': () => import('./dictionaries/en-us.ts').then((module) => module.default as Dictionary),
    'ja-jp': () => import('./dictionaries/ja-jp.ts').then((module) => module.default as Dictionary),
    'pt-br': () => import('./dictionaries/pt-br.ts').then((module) => module.default as Dictionary),
};

export const getDictionary = async (locale: string) =>
    dictionaries[locale as keyof typeof dictionaries]();

const personalDictionaries = {
    'en-us': () =>
        import('./dictionaries/personal/en-us.ts').then(
            (module) => module.default as PersonalDictionary,
        ),
    'ja-jp': () =>
        import('./dictionaries/personal/ja-jp.ts').then(
            (module) => module.default as PersonalDictionary,
        ),
    'pt-br': () =>
        import('./dictionaries/personal/pt-br.ts').then(
            (module) => module.default as PersonalDictionary,
        ),
};

export const getPersonalDictionary = async (locale: string) =>
    personalDictionaries[locale as keyof typeof personalDictionaries]();
