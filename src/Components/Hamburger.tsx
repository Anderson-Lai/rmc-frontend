import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import x from '../assets/x-img.svg'

type Props = {
    links: object,
}

export default function Hamburger( { links } : Props ) {

    const menu = useRef<HTMLDivElement | null>(null);

    const [render, setRender] = useState(false);

    function toggleMenu() {
        setRender(curr => !curr);
        menu.current?.classList.toggle("invisible");
    }

    return (
        <div className="sm:min-w-96 md:min-w-32 mx-2 flex justify-center">
            {/* slide in */}
            <motion.div ref={menu}
                initial={{ x: '100vw' }}
                animate={{ x: render ? 0 : '100vw' }} 
                transition={{ delay: 0, duration: 0.3, ease: "easeOut" }}
                className="invisible fixed top-0 right-0 w-[325px] h-screen bg-bg-black py-10"
            >
                <div className="w-full flex justify-end">
                    <img src={x} onClick={toggleMenu} className="mx-7" />
                </div>
                {
                    Object.keys(links).map((key, index) => {
                            return (
                                <>
                                <div className="m-2 text-xl duration-150 hover:bg-indigo-900
                                    hover:rounded-lg font-semibold py-1" style={{height: "fit-content"}} key={index}>
                                    <Link to={links[key as keyof typeof links]} className="px-3 pb-2">
                                        {key}
                                    </Link>
                                </div>
                                </>
                                
                            );
                        })
                }
            </motion.div>

            {/* hamburger menu */}
            <div className="w-[30px] cursor-pointer" onClick={toggleMenu}>
                <h4 className="border border-white my-2" />
                <h4 className="border border-white my-2" />
                <h4 className="border border-white my-2" />
            </div>
        </div>
    );
}