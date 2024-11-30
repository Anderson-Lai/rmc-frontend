import { useState, useEffect } from "react";
import ExtracurricularCard from "../Components/ExtracurricularCard";
import PageTitle from "../Components/PageTitle";
import { clubs, councils } from "../Data/ExtracurricularData";
import type { ExtracurricularProps } from "../Components/ExtracurricularCard";
import { v4 } from "uuid";

function isAlphaNumeric(string: string) {
    for (let i = 0; i < string.length; i++) {
        const code = string.charCodeAt(i);
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

// returns all of an ec's data as a single string
function ecToString(ec: ExtracurricularProps) {
    let result = "";
    const { name, frequency, biography, location, 
        teacherAdvisors, contactInformation, presidents } = ec;
    
    // cleaning data
    const cleanName = cleanString(name);
    const cleanFrequency = cleanString(frequency);
    const cleanBiography = cleanString(biography ?? "");
    const cleanLocation = cleanString(location ?? "");
    const cleanTeacherAdvisors = cleanString(teacherAdvisors?.join(" ") ?? "");
    const cleanContactInformation = cleanString(contactInformation?.join(" ") ?? "");
    const cleanPresidents = cleanString(presidents?.join(" ") ?? "");
    
    result += cleanName ? cleanName + " " : "";
    result += cleanFrequency ? cleanFrequency + " " : "";
    result += cleanBiography ? cleanBiography + " " : "";
    result += cleanLocation ? cleanLocation + " " : "";
    result += cleanTeacherAdvisors ? cleanTeacherAdvisors + " " : "";
    result += cleanContactInformation ? cleanContactInformation + " " : "";
    result += cleanPresidents ? cleanPresidents + " " : "";

    return result.trim();
}

function resetValues(ecs: ExtracurricularProps[]) {
    for (let i = 0; i < ecs.length; i++) {
        ecs[i].value = 1;
    }
}

// main logic behind filtering
function setValues(ecs: ExtracurricularProps[], search: string) {
    // clean the input string, if it is empty, display all ecs
    const cleanedSearch = cleanString(search);
    if (cleanedSearch === "") {
        // reset the "value" key to 1 for all ecs
        resetValues(ecs);
        return ecs;
    }

    // update the filter
    const updated = ecs.map((ec) => {
        // convert all of the ec's data into a single string
        // and clean that string
        const cleanedEc = cleanString(ecToString(ec));

        // check if the ec's "data string" contains the search's data, if yes, include it in
        // the list of rendered ec's by keeping its "value" key at 1
        return { ...ec, value: cleanedEc.includes(cleanedSearch) ? 1 : 0 };
    });

    return updated;
}

export default function Extracurriculars() {

    const [search, setSearch] = useState("");
    const [filteredClubs, setFilteredClubs] = useState(clubs);
    const [filteredCouncils, setFilteredCouncils] = useState(councils);

    // update the ec filter everytime the search <input /> changes
    useEffect(() => {
        updateFilter(search)
    }, [search]);

    function updateFilter(inputValue: string) {
        setFilteredClubs((c) => setValues(c, inputValue));
        setFilteredCouncils((c) => setValues(c, inputValue));
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        // useEffect (view above) monitors the "search" variable, and
        // updates the filter everytime it changes
        setSearch(() => e.target.value);
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Backspace") {
            const target = e.target as HTMLInputElement;
            
            // check if input is highlighted (such as via ctrl + a)
            if (target.selectionStart === 0 && target.selectionEnd === search.length) {
                // manually clear the input
                e.preventDefault();
                setSearch(() => "");

                // since react bundles state updates, manually pass in ""
                updateFilter("")
            }
        }
    }

    return (
        <>
            <PageTitle title="Clubs List" />

            <div className="mt-14 px-3 md:px-12">
                <input
                    autoFocus
                    placeholder="Search for a club or council..."
                    className="w-full bg-transparent rounded-xl text-lg px-3 py-1 border-2 border-border-light-yellow outline-none"
                    onChange={handleChange}
                    // onKeyDown is needed as pressing backspace after the entire
                    // search is highlighted (such as through ctrl + a) is
                    // not detected by onChange
                    onKeyDown={handleKeyDown}
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