import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import x from '../assets/x-img.svg'
import { v4 } from "uuid";

type Props = {
    links: object,
}

export default function Hamburger( { links } : Props ) {

    const menu = useRef<HTMLDivElement | null>(null);

    const [render, setRender] = useState(false);
    const [style, setStyle] = useState("fixed top-0 left-0 z-[-10] h-screen w-screen");

    function toggleMenu() {
        setRender(curr => !curr);
    }

    function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.stopPropagation();
        toggleMenu();
    }

    function hideMenu() {
        if (render) {
            setRender(curr => !curr);
        }
    }

    useEffect(() => {
        if (!render) {
            setStyle(() => "fixed top-0 left-0 z-[-10] h-screen w-screen")
        }
        else {
            setStyle(() => "fixed top-0 left-0 z-10 h-screen w-screen")
        }
    }, [render]);

    return (
        <>
            <div className="mx-2">
                {/* slide in */}
                <motion.div ref={menu}
                    initial={{ x: '325px' }}
                    animate={{ x: render ? 0 : '325px' }} 
                    transition={{ delay: 0, duration: 0.3, ease: "easeOut" }}
                    className="fixed top-0 right-0 w-[325px] h-screen bg-bg-black py-10 z-20"
                >
                    <div className="w-full flex justify-end cursor-pointer">
                        <img src={x} onClick={toggleMenu} className="mx-7" />
                    </div>
                    <div className="flex flex-col">
                        {
                            Object.keys(links).map((key) => {
                                    return (
                                        <Link to={links[key as keyof typeof links]} 
                                            className="my-1 mx-2 duration-150 px-3 py-2 hover:bg-indigo-900 
                                            hover:rounded-lg font-semibold" 
                                            key={v4()}
                                            onClick={toggleMenu}
                                        >
                                                {key}
                                        </Link>
                                    );
                                })
                        }
                    </div>
                </motion.div>

                {/* hamburger menu */}
                <div className="w-[30px] cursor-pointer" onClick={handleClick}>
                    <h4 className="border border-white my-2" />
                    <h4 className="border border-white my-2" />
                    <h4 className="border border-white my-2" />
                </div>
            </div>

            <div className={style} onClick={hideMenu} />
        </>
    );
}