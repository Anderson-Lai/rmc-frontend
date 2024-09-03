import PageTitle from "../Components/PageTitle";
import AnnouncementCard from "../Components/AnnouncementCard";

export default function Announcements() {
    return (
        <>
            <PageTitle title="ANNOUNCEMENTS" />

            <div className="my-14 flex justify-center">
                <AnnouncementCard 
                    title="Click to view the latest announcements!"
                    link="https://docs.google.com/spreadsheets/d/1ls3lAzoKo3OTLW5JOCwc21LVKx-p0PCFeidrfXkptME/edit?usp=sharing" 
                    embed={
                        <div></div>
                    }  
                />
            </div>
        </>
    );
}