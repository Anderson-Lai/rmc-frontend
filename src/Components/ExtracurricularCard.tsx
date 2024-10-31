

export type ExtracurricularProps = {
    name: string,
    frequency: string,
    value: number,
    biography?: string,
    location?: string,
    teacherAdvisors?: string[],
    contactInformation?: string[],
    presidents?: string[],
}

export default function ExtracurricularCard( { name, frequency, biography, location, teacherAdvisors,
    contactInformation, presidents } : ExtracurricularProps ) {

    return (
        <div className="border border-border-light-yellow rounded-lg
            flex flex-col px-4 py-2 flex-wrap w-full h-full font-title-family
            hover:shadow-medium-white hover:-translate-y-2 duration-150 delay-75"
            >
            <h3 className="text-3xl mb-5 font-semibold">{name}</h3>

            <div className="my-2">
                <h4 className="text-xl font-semibold">Meeting Date:</h4>
                <p className="text-lg">{frequency}</p>
            </div>

            {
                biography && 
                <div className="my-2">
                    <h4 className="text-xl font-semibold">Bio:</h4>
                    <p className="text-lg">{biography}</p>
                </div>
            }

            {
                teacherAdvisors &&
                <div className="my-2">
                    <h4 className="text-xl font-semibold">Teacher Advisors:</h4>
                    <p className="text-lg italic">{teacherAdvisors?.join(" | ")}</p>
                </div>
            }

            {
                presidents &&
                <div className="my-2">
                    <h4 className="text-xl font-semibold">Teacher Advisors:</h4>
                    <p className="text-lg italic">{presidents?.join(" | ")}</p>
                </div>
            }

            {
                contactInformation &&
                <div className="my-2">
                    <h4 className="text-xl font-semibold">Contact Information:</h4>
                    <p className="text-lg italic">{contactInformation?.join(" | ")}</p>
                </div>
            }

            {
                location && 
                <div className="my-2">
                    <h4 className="text-xl font-semibold">Location:</h4>
                    <p className="text-lg">{location}</p>
                </div>
            }
        </div>
    );
}