

export type Extracurricular = {
    name: string,
    frequency: string,
    value: number,
    biography?: string,
    location?: string,
    teacherAdvisors?: string[],
    contactInformation?: string[],
    presidents?: string[],
    welcomingNewMembers?: boolean
}

export const clubs: Extracurricular[] = [
    {
        name: "AXIOM Newspaper",
        frequency: "Tuesday biweekly",
        value: 1,
        biography: "testing 123 abc",
        location: "Room 223",
        teacherAdvisors: ["Mr. Wood"],
        contactInformation: ["Instagram: @theaxiomnewspaper", "Website: theaxiom.ca"],
        welcomingNewMembers: true
    },
    {
        name: "Band (Junior, Intermediate, Senior)",
        frequency: "Schedule available to music students",
        value: 1,
        location: "Rooms 111 and 133",
        teacherAdvisors: ["B. Facchini", "A. DeGirolamo"],
        welcomingNewMembers: true
    },
    {
        name: "Board Games Club",
        frequency: "Friday weekly",
        value: 1,
        teacherAdvisors: ["J. Buckley"],
        welcomingNewMembers: true
    },
    {
        name: "Chaplaincy Choir",
        value: 1,
        frequency: "Friday weekly",
        teacherAdvisors: ["A. Koon"],
        contactInformation: ["Instagram: @strchaplaincy"],
        welcomingNewMembers: true
    },
    {
        name: "Chinese Cultural heritage Club",
        frequency: "Tuesday",
        value: 1,
        location: "Room 141",
        teacherAdvisors: ["J. Liu"],
        welcomingNewMembers: true
    },
    {
        name: "Concert Choir",
        frequency: "Tuesday weekly",
        value: 1,
        location: "Room 111",
        teacherAdvisors: ["B. Facchini"],
        welcomingNewMembers: true
    }
].sort((first, second) => first.name.localeCompare(second.name));

export const councils: Extracurricular[] = [
    {
        name: "AXIOM Newspaper",
        frequency: "Tuesday biweekly",
        value: 1,
        biography: "testing 123 abc",
        location: "Room 223",
        teacherAdvisors: ["Mr. Wood"],
        contactInformation: ["Instagram: @theaxiomnewspaper", "Website: theaxiom.ca"],
        welcomingNewMembers: true
    },
].sort((first, second) => first.name.localeCompare(second.name));