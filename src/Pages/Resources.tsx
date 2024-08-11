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
                            const key = k as keyof typeof generalData;
                            return (
                                <Card image={generalData[key].image} title={generalData[key].title}
                                body={generalData[key].body} link={generalData[key].link} key={v4()} />
                            );
                        })
                    }
                </div>
            </div>

            <div className="mt-14 mx-5 lg:mx-24 lg:block flex flex-col items-center">
                <h3 className="font-semibold text-3xl mb-8">Guidance Resources</h3>

                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-7 place-items-stretch">
                    {/* {
                        Object.keys(guidanceData).map((k) => {
                            const key = k as keyof typeof guidanceData;
                            return (
                                <Card image={guidanceData[key].image} title={guidanceData[key].title}
                                body={guidanceData[key].body} link={guidanceData[key].link} key={v4()} />
                            );
                        })
                    } */}
                    <Card image={guidanceData.appointment.image} title="Book an appointment" body={guidanceData.appointment.body}
                    link={guidanceData.appointment.link} />

                    <Card image={guidanceData.courseChange.image} title="Course changes" body={guidanceData.courseChange.body}
                    link={guidanceData.courseChange.link} />

                    <Card image={guidanceData.guidanceWebsite.image} title="Guidance website" body={guidanceData.guidanceWebsite.body}
                    link={guidanceData.guidanceWebsite.link} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-7">
                    <Card image={guidanceData.shsm.image} title="SHSM" body={guidanceData.shsm.body}
                    link={guidanceData.shsm.link} />

                    <Card image={guidanceData.tutoring.image} title="Tutoring" body={guidanceData.tutoring.body}
                    link={guidanceData.tutoring.link} />
                </div>
            </div>
        </>
    );
}