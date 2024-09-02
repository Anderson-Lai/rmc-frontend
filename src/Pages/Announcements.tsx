import PageTitle from "../Components/PageTitle";
import AnnouncementCard from "../Components/AnnouncementCard";

export default function Announcements() {
    return (
        <>
            <PageTitle title="ANNOUNCEMENTS" />

            <div className="my-14 flex justify-center">
                <AnnouncementCard link="" embed={<div></div>} title="Click to view the latest announcements!" />
            </div>
        </>
    );
}