import { Link } from "react-router-dom";
import Card from "../Components/Card";
import logo from '../assets/logo.png'

export default function Home() {
    const filler = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ducimus nam debitis dignissimos quisquam cupiditate nisi illo quos, similique eum nihil, sint dolorum aperiam iure alias officia molestiae incidunt magni."
    
    
    return (
        <>
            <div className="md:mt-20 flex flex-col items-center text-center">
                <h1 className="text-8xl lg:text-9xl font-bold">RAMS MEDIA</h1>
                <h4 className="font-semibold mt-10">Rising Artists Marketing and Storytelling</h4>

                <button className="mt-12 text-2xl rounded-xl border border-border-light-yellow px-3 py-2
                 hover:-translate-y-2 duration-200 delay-100 hover:scale-110">
                    <Link to="/contact">Contact Us</Link>
                </button>
            </div>

            <div className="mt-14 md:mx-24 md:block flex flex-col items-center">
                <h3 className="font-semibold text-3xl mb-8">About Us</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-start">
                    <div className="flex flex-col md:items-start items-center">
                        <Card image={logo} title="Our Purpose" body={filler} />
                        <Card image={logo} title="Our Goals" body={filler} />
                    </div>

                    <div className="flex flex-col md:items-end items-center">
                        <Card image={logo} title="Daily Announcements" body={filler} />
                        <Card image={logo} title="Morning Music" body={filler} />
                    </div>
                </div>
            </div>
        </>
    );
}