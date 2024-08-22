import { motion } from "framer-motion";
import { useRef } from "react";
import { IconType } from "react-icons";

export type Props = {
    name: string,
    value: string,
    Icon: IconType,
    delay?: number,
}

export default function ContactCard( { name, value, Icon, delay } : Props ) {
    const button = useRef<HTMLButtonElement | null>(null);

    async function handleClick() {
        await window.navigator.clipboard.writeText(value);
        button.current!.textContent = "Copied!";
    }
    function handleMosueOut() {
        button.current!.textContent = "Copy";
    }

    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: delay, duration: 0.75, ease: "backOut" }}
            className="border-border-light-yellow border-2 rounded-lg flex flex-col items-center w-full py-1 px-4 mb-5"
        >
            <h4 className="text-2xl font-semibold flex justify-center items-center">Contact us {name}!
                <Icon size={25} className="ml-5" /></h4>

            <p className="text-center text-lg mt-2">{value}</p>
            <button 
                ref={button} 
                onClick={handleClick}
                onMouseOut={handleMosueOut}
                className="text-xl bg-bg-dark-green rounded-full p-3 py-1 mt-1 mb-2"
            >
                Copy
            </button>
        </motion.div>
    );
}