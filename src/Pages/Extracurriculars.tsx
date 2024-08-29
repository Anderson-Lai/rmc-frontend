import ExtracurricularCard from "../Components/ExtracurricularCard";
import PageTitle from "../Components/PageTitle";
import { clubs } from "../Data/ExtracurricularData";

export default function Extracurriculars() {
    return (
        <>
            <PageTitle title="Clubs List" />  

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-10 place-items-center
            px-3 md:px-7 mt-14">
                {
                    clubs.map((club, index) => {
                        return (
                            <ExtracurricularCard {...club} key={index} />
                        );
                    })
                }
            </div>

            <PageTitle title="Councils List" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-10 place-items-center
            px-3 md:px-7 mt-14">

            </div>
        </>
    );
}