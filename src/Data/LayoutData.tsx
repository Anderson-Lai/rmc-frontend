import { IconType } from "react-icons";
import { FaEnvelope, FaInstagram } from "react-icons/fa";

type HeaderLink = {
    title: string,
    link: string
}

export const links: HeaderLink[] = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "Resources",
        link: "/resources"
    },
    {
        title: "Extracurriculars",
        link: "/extracurriculars"
    },
    {
        title: "Announcements",
        link: "/announcements"
    },
    // {
    //     title: "Contact",
    //     link: "/contact"
    // }
];

export type HamburgerLink = HeaderLink & {
    Image?: IconType,
    target?: string
};

export const hamburgerLinks: HamburgerLink[] = [
    ...links,
    {
        title: "Instagram",
        link: "https://www.instagram.com/ramsmediaclub/",
        Image: FaInstagram,
        target: "_blank"
    },
    {
        title: "Gmail",
        link: "mailto:strobsmedia@gmail.com",
        Image: FaEnvelope,
        target: "_blank"
    }
];
