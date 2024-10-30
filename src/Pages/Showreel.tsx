import { v4 } from "uuid";
import PageTitle from "../Components/PageTitle";
import ShowreelCard from "../Components/ShowreelCard";
import { showreelElements, mediaOfTheMonth } from "../Data/ShowreelData";

type HeaderProps = {
    heading: string
}

function Header( { heading } : HeaderProps ) {
    return (
        <h2 className="font-semibold text-3xl text-center">{heading}</h2>
    );
}

export default function Showreel() {
    return (
        <>
            <div className="mb-24">
                <PageTitle title="SHOWREEL" />
            </div>
        
            <Header heading="Media of the Month" />
            <div className="mt-12 mx-5 lg:mx-24">

                <ShowreelCard {...mediaOfTheMonth} />
            </div>

            <div className="mt-24">
                <Header heading="Media By Your Executives" />
            </div>

            <div className="mt-12 mx-5 lg:mx-24 flex flex-col justify-center items-center space-y-20">
                {
                    showreelElements.map((s) => {
                        return <ShowreelCard {...s} key={v4()} />
                    })
                }
            </div>
        </>
    );
}