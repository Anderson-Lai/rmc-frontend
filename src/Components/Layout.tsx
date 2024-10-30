import { ReactElement } from "react"
import { Link } from "react-router-dom";
import { links, hamburgerLinks} from "../Data/LayoutData";
import logo from '../Images/logo.png';
import Logo from "../Components/Logo";
import Hamburger from "./Hamburger";
import { v4 } from "uuid";

type LayoutProps = {
    children: ReactElement
}

export default function Layout( { children } : LayoutProps ) {
    return (
        <div className="flex flex-col min-h-screen justify-between from-bg-dark-green to-bg-black bg-gradient-to-t">
            <div className="flex flex-col">
                <header className="text-text-light-green flex justify-between items-center px-4 py-3 mb-5 mt-10 max-h-fit">

                    <div className="w-16 lg:w-20 flex justify-end items-center mx-5 md:mx-10">
                        <Logo logo={logo} />
                    </div>

                    <nav className="hidden lg:flex h-fit place-items-center">
                        {
                            links.map(link => {
                                return (
                                    <Link to={link.link}
                                        className="px-3 py-1
                                        mx-4 my-2 text-xl duration-150 hover:bg-button-hover
                                        rounded-lg font-semibold h-fit" key={v4()}
                                    >
                                        {link.title}
                                    </Link>
                                );
                            })
                        }
                        
                    </nav>

                    <div className="w-16 lg:w-20 flex justify-center items-center mx-5 md:mx-10">
                        <Hamburger links={hamburgerLinks} />    
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