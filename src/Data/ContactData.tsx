import type { ContactCardProps } from "../Components/ContactCard";

const classroomCode = "bcausn2";
const email = "strobsmedia@gmail.com";

export const contacts: ContactCardProps[] = [
    {
        name: "Find us on instagram!",
        displayedValue: "@ramsmediaclub",
        action: "goto",
        actionValue: "https://www.instagram.com/ramsmediaclub/"
    },
    {
        name: "Join our google classroom!",
        displayedValue: classroomCode,
        action: "copy",
        actionValue: classroomCode
    },
    {
        name: "Contact us by email!",
        displayedValue: email,
        action: "copy",
        actionValue: email,
    }
]