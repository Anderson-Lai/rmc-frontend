import { v4 } from "uuid";
import PageTitle from "../Components/PageTitle";
import ShowreelCard from "../Components/ShowreelCard";
import { showreelElements } from "../Data/ShowreelData";

export default function Showreel() {
    return (
        <>
            <PageTitle title="SHOWREEL" />
            
            <div className="mt-24 mx-5 lg:mx-24 flex flex-col justify-center items-center space-y-20">
                {
                    showreelElements.map((s) => {
                        return <ShowreelCard {...s} key={v4()} />
                    })
                }
            </div>
        </>
    );
}