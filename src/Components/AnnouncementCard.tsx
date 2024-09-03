import { ReactNode, useRef } from "react";
import { motion } from "framer-motion";

type Props = {
    title: string,
    link: string,
    embed: ReactNode
}

export default function AnnouncementCard( { title, link, embed} : Props ) {

    const button = useRef<HTMLButtonElement | null>(null);

    async function copyLink() {
        await navigator.clipboard.writeText(link);
        button.current!.textContent = "Copied!";
    }

    function handleMouseOut() {
        setTimeout(() => {
            button.current!.textContent = "Copy Link";
        }, 225)
    }

    return (
        <div className="border-2 border-border-light-yellow rounded-xl hover:shadow-small-white
        duration-150 delay-75 font-title-family max-w-[750px] flex flex-col items-center px-5 py-4">
            <h2 className="text-2xl text-center font-semibold">{title}</h2>
            <hr className="border-2 border-border-light-yellow w-full mt-2 mb-5" />
            <div>
                {embed}
            </div>
            <motion.button
                ref={button}
                className="rounded-full px-3 py-1 text-xl text-center bg-bg-dark-green"
                transition={{ duration: 0.15, delay: 0.075 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={copyLink}
                onMouseOut={handleMouseOut}
            >
                Copy Link
            </motion.button>
        </div>
    );
}