import { useState, useEffect } from "react";
import ExtracurricularCard from "../Components/ExtracurricularCard";
import PageTitle from "../Components/PageTitle";
import { clubs, councils, Extracurricular } from "../Data/ExtracurricularData";
import { v4 } from "uuid";

function isAlphaNumeric(string: string) {
    for (let i = 0; i < string.length; i++) {
        let code = string.charCodeAt(i);
        if ((code >= 48 && code <= 57) ||
            (code >= 65 && code <= 90) ||
            (code >= 97 && code <= 122) ||
            code === 32 // include ' '
        ) {
            continue;
        }

        return false;
    }
    return true;
}

function cleanString(string: string) {
    let cleaned = "";

    for (let i = 0; i < string.length; i++) {
        if (isAlphaNumeric(string[i])) {
            cleaned += string[i];
        }
    }
    return cleaned.trim().toLowerCase();
}

function ecToString(ec: Extracurricular) {
    let result = "";
    const { name, frequency, biography, location, 
        teacherAdvisors, contactInformation, presidents, welcomingNewMembers } = ec;
    
    // cleaning data
    let cleanName = cleanString(name);
    let cleanFrequency = cleanString(frequency);
    let cleanBiography = cleanString(biography ?? "");
    let cleanLocation = cleanString(location ?? "");
    let cleanTeacherAdvisors = cleanString(teacherAdvisors?.join(" ") ?? "");
    let cleanContactInformation = cleanString(contactInformation?.join(" ") ?? "");
    let cleanPresidents = cleanString(presidents?.join(" ") ?? "");
    
    result += cleanName ? cleanName + " " : "";
    result += cleanFrequency ? cleanFrequency + " " : "";
    result += cleanBiography ? cleanBiography + " " : "";
    result += cleanLocation ? cleanLocation + " " : "";
    result += cleanTeacherAdvisors ? cleanTeacherAdvisors + " " : "";
    result += cleanContactInformation ? cleanContactInformation + " " : "";
    result += cleanPresidents ? cleanPresidents + " " : "";

    // will be converted to lower case by cleanString()
    result += welcomingNewMembers ? "Yes" : "No";

    return result.trim();
}

function resetValues(ecs: Extracurricular[]) {
    for (let i = 0; i < ecs.length; i++) {
        ecs[i].value = 1;
    }
}

function setValues(ecs: Extracurricular[], search: string) {
    if (search === "") {
        resetValues(ecs);
        return ecs;
    }

    let updated = ecs.map((ec) => {
        const cleanedEc = cleanString(ecToString(ec));
        const cleanedSearch = cleanString(search);

        return { ...ec, value: cleanedEc.includes(cleanedSearch) ? 1 : 0 };
    });

    return updated;
}

export default function Extracurriculars() {

    const [search, setSearch] = useState("");
    const [filteredClubs, setFilteredClubs] = useState(clubs);
    const [filteredCouncils, setFilteredCouncils] = useState(councils);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(() => e.target.value);
    }

    useEffect(() => {
        setFilteredClubs((c) => setValues(c, search));
        setFilteredCouncils((c) => setValues(c, search));
    }, [search]);

    return (
        <>
            <PageTitle title="Clubs List" />

            <div className="mt-14 px-3 md:px-12">
                <input
                    placeholder="Search for a club or council..."
                    className="w-full bg-transparent rounded-xl text-lg px-3 py-1 border-2 border-border-light-yellow"
                    onChange={handleChange}
                    value={search}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-10 place-items-center px-3 md:px-12 mt-14">
                {
                    filteredClubs.filter((c) => c.value > 0).map((c) => {
                        return <ExtracurricularCard {...c} key={v4()} />
                    })
                }
            </div>

            <PageTitle title="Councils List" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-10 place-items-center px-3 md:px-12 mt-14">
                {
                    filteredCouncils.filter((c) => c.value > 0).map((c) => {
                        return <ExtracurricularCard {...c} key={v4()} />
                    })
                }
            </div>
        </>
    );
}