    // import { useState, useEffect } from "react";
    // import ExtracurricularCard from "../Components/ExtracurricularCard";
    // import PageTitle from "../Components/PageTitle";
    // import { clubs, councils, Extracurricular } from "../Data/ExtracurricularData";
    // import { v4 } from "uuid";

    // function isAlphaNumeric(string: string) {
    //     for (let i = 0; i < string.length; i++) {
    //         let code = string.charCodeAt(i);
    //         if ((code >= 48 && code <= 57) ||
    //             (code >= 65 && code <= 90) ||
    //             (code >= 97 && code <= 122) ||
    //             code === 32 // include ' '
    //         ) {
    //             continue;
    //         }

    //         return false;
    //     }
    //     return true;
    // }

    // function cleanString(string: string) {
    //     let cleaned = "";

    //     // for (let i = 0; i < string.length; i++) {
    //     //     if (isAlphaNumeric(string[i])) {
    //     //         cleaned += string[i];
    //     //     }
    //     // }
    //     return string.trim().toLowerCase();
    // }

    // function ecToString(ec: Extracurricular) {
    //     let result = "";
    //     const { name, frequency, biography, location, 
    //         teacherAdvisors, contactInformation, presidents, welcomingNewMembers } = ec;
        
    //     // cleaning data
    //     let cleanName = cleanString(name);
    //     let cleanFrequency = cleanString(frequency);
    //     let cleanBiography = cleanString(biography ?? "");
    //     let cleanLocation = cleanString(location ?? "");
    //     let cleanTeacherAdvisors = cleanString(teacherAdvisors?.join(" ") ?? "");
    //     let cleanContactInformation = cleanString(contactInformation?.join(" ") ?? "");
    //     let cleanPresidents = cleanString(presidents?.join(" ") ?? "");
        
    //     result += cleanName ? cleanName + " " : "";
    //     result += cleanFrequency ? cleanFrequency + " " : "";
    //     result += cleanBiography ? cleanBiography + " " : "";
    //     result += cleanLocation ? cleanLocation + " " : "";
    //     result += cleanTeacherAdvisors ? cleanTeacherAdvisors + " " : "";
    //     result += cleanContactInformation ? cleanContactInformation + " " : "";
    //     result += cleanPresidents ? cleanPresidents + " " : "";

    //     result += welcomingNewMembers ? "Yes" : "No";
    //     console.log(result);

    //     return result.trim();
    // }

    export function resetValues(ecs: Extracurricular[]) {
        for (let i = 0; i < ecs.length; i++) {
            ecs[i].value = 1;
        }
    }

    // export default function Extracurriculars() {
    //     const [search, setSearch] = useState<string>("");

    //     function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    //         setSearch(() => e.target.value);

    //         setValue(clubs);
    //         setValue(councils);
    //     }

    //     function setValue(ecs: Extracurricular[]) {
    //         if (search === null || search === "") {
    //             resetValues(ecs);
    //             return;
    //         }

    //         for (let i = 0; i < ecs.length; i++) {
    //             // find the substring (search) and count how many
    //             // times it occurs in each ec

    //             let count = 0;
    //             const stringified = cleanString(ecToString(ecs[i]));
    //             const searchLength = search.length;
    //             const cleanedSearch = cleanString(search).toLowerCase();
    //             console.log(cleanedSearch); 

    //             for (let j = 0; j < stringified.length - searchLength; j++) {
    //                 if (stringified.substring(j, j + searchLength) === cleanedSearch) {
    //                     count++;
    //                 }
    //             }

    //             ecs[i].value = count;
    //         }
    //     }

    //     // useEffect(() => {
    //     //     setValue(clubs);
    //     //     setValue(councils);
    //     //     console.log(cleanString(search))
    //     // }, [search]);

    //     return (
    //         <>
    //             <PageTitle title="Clubs List" />  

    //             <div className="mt-14 px-3 md:px-12">
    //                 <input
    //                     placeholder="Search for a club or council..." 
    //                     className="w-full bg-transparent rounded-xl text-xl
    //                     px-3 py-1 border-2 border-border-light-yellow"
    //                     onChange={handleChange}
    //                     value={search}
    //                     >
    //                 </input>
    //             </div>

    //             <p>{cleanString(search)}</p>

    //             <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-10 place-items-center
    //             px-3 md:px-12 mt-14">
    //                 {
    //                     clubs.filter((club) => club.value > 0).map((club) => {
    //                         return <ExtracurricularCard {...club} key={v4()} />
    //                     })
    //                 }
    //             </div>

    //             <PageTitle title="Councils List" />
    //             <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-10 place-items-center
    //             px-3 md:px-12 mt-14">
    //                 {
    //                     councils.filter((council) => council.value > 0).map((council) => {
    //                         return <ExtracurricularCard {...council} key={v4()} />
    //                     })
    //                 }
    //             </div>
    //         </>
    //     );
    // }

import { useState, useEffect } from "react";
import ExtracurricularCard from "../Components/ExtracurricularCard";
import PageTitle from "../Components/PageTitle";
import { clubs, councils, Extracurricular } from "../Data/ExtracurricularData";
import { v4 } from "uuid";

function cleanString(string: string) {
    return string.trim().toLowerCase();
}

function ecToString(ec: Extracurricular) {
    const { name, frequency, biography, location, teacherAdvisors, contactInformation, presidents, welcomingNewMembers } = ec;

    const cleanName = cleanString(name);
    const cleanFrequency = cleanString(frequency);
    const cleanBiography = cleanString(biography ?? "");
    const cleanLocation = cleanString(location ?? "");
    const cleanTeacherAdvisors = cleanString(teacherAdvisors?.join(" ") ?? "");
    const cleanContactInformation = cleanString(contactInformation?.join(" ") ?? "");
    const cleanPresidents = cleanString(presidents?.join(" ") ?? "");

    let result = `${cleanName} ${cleanFrequency} ${cleanBiography} ${cleanLocation} ${cleanTeacherAdvisors} ${cleanContactInformation} ${cleanPresidents} ${welcomingNewMembers ? "yes" : "no"}`;
    return result.trim();
}

function filterExtracurriculars(ecs: Extracurricular[], search: string): Extracurricular[] {
    if (!search) return ecs;

    const cleanedSearch = cleanString(search);
    return ecs.map((ec) => {
        const stringified = ecToString(ec);
        const count = stringified.includes(cleanedSearch) ? 1 : 0;
        return { ...ec, value: count };
    }).filter(ec => ec.value > 0);
}

export default function Extracurriculars() {
    const [search, setSearch] = useState<string>("");
    const [filteredClubs, setFilteredClubs] = useState<Extracurricular[]>(clubs);
    const [filteredCouncils, setFilteredCouncils] = useState<Extracurricular[]>(councils);

    useEffect(() => {
        setFilteredClubs(filterExtracurriculars(clubs, search));
        setFilteredCouncils(filterExtracurriculars(councils, search));
    }, [search]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value);
    }

    return (
        <>
            <PageTitle title="Clubs List" />

            <div className="mt-14 px-3 md:px-12">
                <input
                    placeholder="Search for a club or council..."
                    className="w-full bg-transparent rounded-xl text-xl px-3 py-1 border-2 border-border-light-yellow"
                    onChange={handleChange}
                    value={search}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-10 place-items-center px-3 md:px-12 mt-14">
                {filteredClubs.map((club) => (
                    <ExtracurricularCard {...club} key={v4()} />
                ))}
            </div>

            <PageTitle title="Councils List" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-10 place-items-center px-3 md:px-12 mt-14">
                {filteredCouncils.map((council) => (
                    <ExtracurricularCard {...council} key={v4()} />
                ))}
            </div>
        </>
    );
}