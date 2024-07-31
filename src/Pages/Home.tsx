import { Link } from "react-router-dom";
import Card from "../Components/Card";
import { cardData, iosLink, googleLink, appDescription } from "../Data/HomeData";


export default function Home() {

    function isIos() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    }   

    function handleDownload() {
        const ios = isIos();
        
        if (ios) {
            window.location.href = iosLink
        } else {
            window.location.href = googleLink
        }
    }

    return (
        <>
            <div className="md:mt-20 flex flex-col items-center text-center">
                <h1 className="text-8xl lg:text-9xl font-bold">RAMS MEDIA</h1>
                <h4 className="font-semibold mt-10">Rising Artists Marketing and Storytelling</h4>

                <button className="mt-12 text-2xl rounded-xl border border-border-light-yellow px-3 py-2
                 hover:-translate-y-2 duration-200 delay-100 hover:scale-110 hover:shadow-white">
                    <Link to="/contact">Contact Us</Link>
                </button>
            </div>

            <div className="mt-14 md:mx-24 md:block flex flex-col items-center">
                <h3 className="font-semibold text-3xl mb-8">About Us</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-start">
                    <div className="flex flex-col md:items-start items-center">
                        <Card image={cardData.purpose.image} title="Our Purpose" body={cardData.purpose.body} />
                        <Card image={cardData.goals.image} title="Our Goals" body={cardData.goals.image} />
                    </div>

                    <div className="flex flex-col md:items-end items-center">
                        <Card image={cardData.announcements.image} title="Daily Announcements" body={cardData.announcements.body} />
                        <Card image={cardData.music.image} title="Morning Music" body={cardData.music.body} />
                    </div>
                </div>
            </div>
            
            <div className="mt-28 flex flex-col items-center">
                <h2 className="font-bold text-center text-3xl">St. Robert CHS</h2>
                <p className="text-center my-9" style={{maxWidth: "50%"}}>{appDescription}</p>

                <button className="mt-4 mb-96 text-2xl rounded-xl border border-border-light-yellow px-3 py-2
                 hover:-translate-y-2 duration-200 delay-100 hover:scale-110 hover:shadow-white"
                 onClick={handleDownload}>
                    Download the App
                </button>
            </div>
        </>
    );
}