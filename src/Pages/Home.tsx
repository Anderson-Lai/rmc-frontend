import { Link } from "react-router-dom";
import Card from "../Components/Card";
import { cardData, iosLink, googleLink, appDescription } from "../Data/HomeData";
import { v4 } from "uuid";
import TypewriterEffect from "../Components/TypewriterEffect";

export default function Home() {

    function isIos() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    }   

    function handleDownload() {
        const ios = isIos();
        
        if (ios) {
            window.open(iosLink, "_blank", "noreferrer,noopener");
        } 
        else {
            window.open(googleLink, "_blank", "noreferrer,noopener");
        }
    }

    return (
        <>
            <div className="md:mt-12 lg:mt-20 flex flex-col items-center text-center">
                <TypewriterEffect className="text-8xl lg:text-9xl font-bold text-center" message="RAMS MEDIA" characterDelay={75} />
                <h4 className="font-semibold mt-10">Rising Artists Marketing and Storytelling</h4>

                
                <Link to="/contact"  
                    className="mt-6 text-xl rounded-xl border-2 border-border-light-yellow px-5 py-2
                    hover:-translate-y-2 duration-150 delay-75 hover:shadow-button-white"
                >
                    Contact Us
                </Link>
            </div>

            <div className="mt-14 mx-5 lg:mx-20 lg:block flex flex-col items-center">
                <h3 className="font-semibold text-3xl mb-8">About Us</h3>

                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-7">
                    {
                        cardData.map(card => {
                            return <Card {...card} key={v4()} />
                        })
                    }
                </div>
            </div>
            
            <div className="mt-28 mb-64 flex flex-col items-center">
                <h2 className="font-bold text-center text-3xl">St. Robert CHS</h2>
                <p className="text-center my-9 w-[90%] lg:w-[50%]">{appDescription}</p>

                <button className="mt-4 text-lg rounded-xl border-2 border-border-light-yellow px-5 py-2
                 hover:-translate-y-2 duration-150 delay-75 hover:shadow-button-white"
                 onClick={handleDownload}>
                    Download the App
                </button>
            </div>
        </>
    );
}
