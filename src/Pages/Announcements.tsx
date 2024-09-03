import PageTitle from "../Components/PageTitle";
import AnnouncementCard from "../Components/AnnouncementCard";

export default function Announcements() {
    return (
        <>
            <PageTitle title="ANNOUNCEMENTS" />

            <div className="my-14 flex justify-center px-2">
                <AnnouncementCard
                    title="View the latest announcements!"
                    link="https://docs.google.com/spreadsheets/d/1ls3lAzoKo3OTLW5JOCwc21LVKx-p0PCFeidrfXkptME/edit?usp=sharing"
                    embed={
                        <iframe
                        src="https://docs.google.com/spreadsheets/d/1ZHHIM4D76i2zmnLPxDSmiLLpQkJtFA_D-8xZSo1T8EY/pubhtml?widget=true&amp;headers=false"
                            style={{ border: 'none', width: '100%', height: '100%' }}
                            title="Announcement Spreadsheet"
                        />
                    }
                />
            </div>
        </>
    );
}