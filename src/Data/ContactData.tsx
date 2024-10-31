// deprecated

import type { ContactCardProps } from "../Components/ContactCard";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export const contacts: ContactCardProps[] = [
    {
        name: "by email",
        value: "strobsmedia@gmail.com",
        Icon: FaEnvelope
    },
    {
        name: "on instagram",
        value: "@ramsmediaclub",
        Icon: FaInstagram
    }
]