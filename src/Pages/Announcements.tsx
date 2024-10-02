import PageTitle from "../Components/PageTitle";
import AnnouncementCard from "../Components/AnnouncementCard";

export default function Announcements() {
    return (
        <>
            <PageTitle title="ANNOUNCEMENTS" />

            <div className="my-14 flex justify-center px-2">
                <AnnouncementCard
                    title="View the latest announcements!"
                    link="https://docs.google.com/spreadsheets/d/120NMj5KKX5_XBEjrG6iJCzZ9LUcZALpSd0bEZTqQveQ/edit?usp=sharing"
                    embed={
                        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRt19P0ItVrsvrc9wz8xvn2_vqrGDKdD6Qp5ADFxVeIiV69Irp6TORebYDwI2gSOmEGsevsWFPCggI4/pubhtml?widget=true&amp;headers=false"
                            style={{ width: '100%', height: '100%' }}
                            title="Announcement Spreadsheet"
                        ></iframe>
                    }
                />
            </div>
        </>
    );
}