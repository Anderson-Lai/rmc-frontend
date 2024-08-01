import Card from "../Components/Card";
import PageTitle from "../Components/PageTitle";
import { generalData, guidanceData } from "../Data/ResourcesData";


export default function Resources() {
    return (
        <>
            <PageTitle title="RESOURCES" />

            <div className="mt-14 lg:mx-24 lg:block flex flex-col items-center">
                <h3 className="font-semibold text-3xl mb-8">General Resources</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center lg:place-items-start">
                    <div className="flex flex-col lg:items-start items-center">
                        <Card image={generalData.edsembli.image} title="Edsembli" body={generalData.edsembli.body} />
                        <Card image={generalData.blueprint.image} title="My Blueprint" body={generalData.blueprint.body} />
                    </div>

                    <div className="flex flex-col lg:items-end items-center">
                        <Card image={generalData.d2l.image} title="D2L" body={generalData.d2l.body} />
                        <Card image={generalData.strWebsite.image} title="St. Robert website" body={generalData.strWebsite.body} />
                    </div>
                </div>
            </div>

            <div className="mt-14 lg:mx-24 lg:block flex flex-col items-center">
                <h3 className="font-semibold text-3xl mb-8">Guidance Resources</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="flex justify-center lg:justify-start">
                        <Card image={guidanceData.appointment.image} title="Book an appointment" body={guidanceData.appointment.body} />
                    </div>
                    <div className="flex justify-center lg:justify-center">
                        <Card image={guidanceData.courseChange.image} title="Course changes" body={guidanceData.courseChange.body} />
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <Card image={guidanceData.guidanceWebsite.image} title="Guidance website" body={guidanceData.guidanceWebsite.body} />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex justify-center">
                        <Card image={guidanceData.shsm.image} title="SHSM" body={guidanceData.shsm.body} />
                    </div>
                    <div className="flex justify-center">
                        <Card image={guidanceData.tutoring.image} title="Tutoring" body={guidanceData.tutoring.body} />
                    </div>
                </div>
            </div>
        </>
    );
}