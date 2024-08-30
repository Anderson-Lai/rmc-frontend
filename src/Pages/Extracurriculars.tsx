import { useState, useEffect } from "react";
import ExtracurricularCard from "../Components/ExtracurricularCard";
import PageTitle from "../Components/PageTitle";
import { clubs, councils, Extracurricular } from "../Data/ExtracurricularData";
import { v4 } from "uuid";

function isAlphaNumeric(string: string) {
    let code = 0;

    for (let i = 0; i < string.length; i++) {
        code = string.charCodeAt(i);
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
    return cleaned;
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
    
    result += (cleanName + " " + cleanFrequency + " " + cleanBiography + " " + cleanLocation + " "
        + cleanTeacherAdvisors + " " + cleanContactInformation + " " + cleanPresidents + " "
    );

    result += welcomingNewMembers ? "Yes" : "No";

    return result;
}


export default function Extracurriculars() {
    const [search, setSearch] = useState<string>("");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const target = e.target;
        const text = target.value;
        setSearch(() => text);
    }

    function setValue(ecs: Extracurricular[]) {
        if (search === null || search === "") {
            for (let i = 0; i < ecs.length; i++) {
                ecs[i].value = 1;
            }
            return;
        }

        for (let i = 0; i < ecs.length; i++) {
            // find the substring (search) and count how many
            // times it occurs in each ec

            let count = 0;
            const stringified = ecToString(ecs[i]).toLowerCase();
            const searchLength = search.length;
            const cleanedSearch = cleanString(search).toLowerCase();

            for (let j = 0; j < stringified.length - searchLength; j++) {
                if (stringified.substring(j, j + searchLength) === cleanedSearch) {
                    count++;
                }
            }

            ecs[i].value = count;
        }
    }

    useEffect(() => {
        setValue(clubs);
        setValue(councils);
    }, [search]);

    return (
        <>
            <PageTitle title="Clubs List" />  

            <div className="mt-14 px-3 md:px-12">
                <input
                    placeholder="Search for a club or council..." 
                    className="w-full bg-transparent rounded-xl text-xl
                    px-3 py-1 border-2 border-border-light-yellow"
                    onChange={handleChange}>
                </input>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-10 place-items-center
            px-3 md:px-12 mt-14">
                {
                    clubs.filter((club) => club.value > 0).map((club) => {
                        return <ExtracurricularCard {...club} key={v4()} />
                    })
                }
            </div>

            <PageTitle title="Councils List" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-10 place-items-center
            px-3 md:px-12 mt-14">
                {
                    councils.filter((counil) => counil.value > 0).map((counil) => {
                        return <ExtracurricularCard {...counil} key={v4()} />
                    })
                }
            </div>
        </>
    );
}