import { IconType } from "react-icons";
import { FaEnvelope, FaInstagram } from "react-icons/fa";

export type LinkObject = {
    title: string,
    link: string
}

export const links: LinkObject[] = [
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

export type HamburgerLink = LinkObject & {
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
