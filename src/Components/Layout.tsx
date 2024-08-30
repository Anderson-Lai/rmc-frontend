import { ReactElement } from "react"
import { Link } from "react-router-dom";
import { links } from "../Data/LayoutData";
import logo from '../assets/logo.png';
import Logo from "../Components/Logo";
import Hamburger from "./Hamburger";
import { v4 } from "uuid";
import { clubs, councils } from "../Data/ExtracurricularData";
import { resetValues } from "../Pages/Extracurriculars";

type Props = {
    children: ReactElement
}

export default function Layout( { children } : Props ) {

    function handleClick() {
        resetValues(clubs);
        resetValues(councils);
    }

    return (
        <div className="min-h-screen flex flex-col from-bg-dark-green to-bg-black bg-gradient-to-t">
            <header className="text-text-light-green flex justify-between items-center px-4 py-3 my-5 max-h-fit">

                <div className="sm:min-w-96 md:min-w-32 flex justify-center items-center">
                    <Logo logo={logo} />
                </div>

                <nav className="hidden lg:flex h-fit place-items-center">
                    {
                        Object.keys(links).map((key) => {
                            return (
                                <div className="mx-4 my-2 text-xl duration-150 hover:bg-indigo-900 
                                    hover:scale-105 hover:-translate-y-2
                                    hover:rounded-lg font-semibold py-1 h-fit" key={v4()}
                                    onClick={handleClick}
                                    >
                                    <Link to={links[key as keyof typeof links]} className="px-3 pb-2">
                                        {key}
                                    </Link>
                                </div>
                            );
                        })
                    }
                </nav>

                <div className="sm:min-w-96 md:min-w-32 flex justify-center items-center">
                    <Hamburger links={links} />    
                </div>
            </header>
            <main className="text-white">
                {children}
            </main>
        </div>
    );
}