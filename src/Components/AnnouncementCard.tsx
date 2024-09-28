import { ReactNode, useRef } from "react";
import { motion } from "framer-motion";

type Props = {
    title: string,
    link: string,
    embed?: ReactNode
}

export default function AnnouncementCard( { title, link, embed} : Props ) {

    const button = useRef<HTMLButtonElement | null>(null);

    function goto() {
        window.open(link, "_blank", "noreferrer,noopener")
    }

    return (
        <div className="border-2 border-border-light-yellow rounded-xl hover:shadow-small-white
            duration-150 delay-75 font-title-famil flex flex-col items-center 
            px-5 py-4 w-[85vw]"
        >
            <h2 className="text-2xl text-center font-semibold">{title}</h2>
            <hr className="border border-border-light-yellow w-full mt-2 mb-5" />

            {
                embed !== undefined ? 
                (
                    <div className="w-full h-[35vh] cursor-pointer">
                        {embed}
                    </div>
                )
                :
                (
                    <div className="w-full">
                        <p className="text-center text-xl">
                            Sorry! The spreadsheet embed is currently unavailable.
                            Click below to view the spreadsheet normally.
                        </p>
                    </div>
                )
            }
            <motion.button
                ref={button}
                className="rounded-full px-3 py-1 text-xl text-center bg-bg-dark-green mt-4"
                transition={{ duration: 0.15, delay: 0.075 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={goto}
            >
                Go to Spreadsheet
            </motion.button>
        </div>
    );
}