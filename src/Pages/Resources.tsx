import Card from "../Components/Card";
import PageTitle from "../Components/PageTitle";
import { generalData, guidanceData } from "../Data/ResourcesData";
import { v4 } from 'uuid';

export default function Resources() {
    return (
        <>
            <PageTitle title="RESOURCES" />

            <div className="mt-14 mx-5 lg:mx-24 lg:block flex flex-col items-center">
                <h3 className="font-semibold text-3xl mb-8">General Resources</h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-7">
                    {
                        Object.keys(generalData).map(k => {
                            return <Card {...generalData[k as keyof typeof generalData]} key={v4()} />
                        })
                    }
                </div>
            </div>

            <div className="mt-14 mx-5 lg:mx-24 lg:block flex flex-col items-center">
                <h3 className="font-semibold text-3xl mb-8">Guidance Resources</h3>

                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-7 place-items-stretch">
                    <Card {...guidanceData.appointment} />
                    <Card {...guidanceData.courseChange} />
                    <Card {...guidanceData.guidanceWebsite} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-7">
                    <Card {...guidanceData.shsm} />
                    <Card {...guidanceData.tutoring} />
                </div>
            </div>
        </>
    );
}