import { ReactElement } from "react"
import { Link } from "react-router-dom";
import { links } from "../Data/LayoutData";
import logo from '../assets/logo.png';
import Logo from "../Components/Logo";
import Hamburger from "./Hamburger";
import { v4 } from "uuid";

type Props = {
    children: ReactElement
}

export default function Layout( { children } : Props ) {
    return (
        <div className="flex flex-col min-h-screen justify-between from-bg-dark-green to-bg-black bg-gradient-to-t">
            <div className="flex flex-col">
                <header className="text-text-light-green flex justify-between items-center px-4 py-3 my-5 max-h-fit">

                    <div className="sm:min-w-96 md:min-w-32 flex justify-center items-center">
                        <Logo logo={logo} />
                    </div>

                    <nav className="hidden lg:flex h-fit place-items-center">
                        {
                            Object.keys(links).map((key) => {
                                return (
                                    <div className="mx-4 my-2 text-xl duration-150 hover:bg-indigo-900 
                                        rounded-lg font-semibold py-1 h-fit" key={v4()}
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

            <footer 
                className="flex justify-center items-center font-font-text bg-black 
                text-text-secondary py-2 mt-16"
            >
                <p className="text-center">
                    Copyright © 2024. All rights reserved. Rams Media Club.
                    {/* todo: | <a href="/privacy">Privacy Policy</a> | 
                    <a href="/tos">Terms Of Service</a> */}
                </p>
            </footer>
        </div>
    );
}