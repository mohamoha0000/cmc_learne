import { BuilderProps } from "./builder/builder";
import Builder from "./builder/porducution";
import { BooleanField, CompField, ListField, ModelField, StringField } from "./builder/Fields";
import locales from '../config/data/locales.config.json';
import config from "../config";
import { BuilderDevice } from "./builder/types";
import {componentInfo} from './sections/MyComponent';
import { header } from "./sections/Header";
import { about } from "./sections/About";
import { resume } from "./sections/Resume";
import { PortfolioComp } from "./sections/Portfolio";
import { BlogComp } from "./sections/Blog";
const sections = {
    group: [
        componentInfo,
        header,
        about
    ],
    group2:[
        resume,
        PortfolioComp,
        BlogComp
    ]
};

const comps = {
};

const elements = {
};

const pageProps = {
    metaTitle: StringField({ type: 'short', default: 'Default Meta Title' }),
    metaDescription: StringField({ type: 'long', default: 'Default Meta Description' })
};

const themeProps = {
    colors: {
      primary: StringField({ type: 'short', default: '#000000' }),
      secondary: StringField({ type: 'short', default: '#FFFFFF' })
    },
    mode: StringField({ type: 'enum', enums: ['light', 'dark'], default: 'light' })
};

const devices : BuilderDevice[] = [
    {
        name: "mobile",
        range: [320, 575],
        icon: "mobile"
    },
    {
        name: "tablet",
        range: [575, 993],
        icon: "tablet"
    },
    {
        name: "flipped phone",
        range: [993, 1200],
        icon: "tablet2"
    },
    {
        name: "laptop",
        range: [1200, Infinity],
        icon: "laptop"
    }
]

const builderConfig : BuilderProps = {
    api: {
        baseURL: `${config.env.SERVER_HOST}/cms/`,
        headers: {
            authorization: config.env.SERVER_SECRET
        }
    },
    info: {
        elements,
        comps,
        sections,
        pageProps,
        themeProps,
        devices,
        locales: locales.locales,
        defaultLocale: locales.locales.find(locale => locale.id === locales.defaultLocale).id,
    }
};

export const builder = new Builder(builderConfig);

export default builderConfig;