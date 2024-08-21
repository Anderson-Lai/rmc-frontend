import { ReactElement } from "react"
import { Link } from "react-router-dom";
import { links } from "../Data/LayoutData";
import logo from '../assets/logo.png'
import Logo from "../Components/Logo";
import Hamburger from "./Hamburger";

type Props = {
    children: ReactElement
}


export default function Layout( { children } : Props ) {
    return (
        <div className="min-h-screen flex flex-col from-bg-dark-green to-bg-black bg-gradient-to-t">
            <header className="text-text-light-green flex justify-between items-start px-4 py-3 my-5">
                <Logo logo={logo} />

                <nav className="grid invisible lg:visible md:grid-cols-2 lg:flex">
                    {
                        Object.keys(links).map((key, index) => {
                            return (
                                <div className="mx-4 my-2 text-xl duration-150 hover:bg-indigo-900 hover:scale-105 hover:-translate-y-2
                                    hover:rounded-lg font-semibold hover:py-1" style={{height: "fit-content"}} key={index}>
                                    <Link to={links[key as keyof typeof links]} className="px-3 pb-2">
                                        {key}
                                    </Link>
                                </div>
                            );
                        })
                    }
                </nav>

                <Hamburger links={links} />    
            </header>
            <main className="text-white">
                {children}
            </main>
        </div>
    );
}