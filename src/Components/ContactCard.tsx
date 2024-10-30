import { motion } from "framer-motion";
import { useRef } from "react";
import { IconType } from "react-icons";

export type Contact = {
    name: string,
    value: string,
    Icon: IconType,
    delay?: number,
}

export default function ContactCard( { name, value, Icon, delay } : Contact ) {
    const button = useRef<HTMLButtonElement | null>(null);

    async function handleClick() {
        await window.navigator.clipboard.writeText(value);
        button.current!.textContent = "Copied!";
    }
    function handleMouseOut() {
        setTimeout(() => {
            button.current!.textContent = "Copy";
        }, 225);
    }

    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: delay, duration: 0.75, ease: "backOut" }}
            className="border-border-light-yellow border-2 rounded-lg flex flex-col 
            items-center w-full py-1 px-4 mb-5"
        >
            <div className="text-xl md:text-2xl font-semibold flex justify-center items-center">
                <h4 className="whitespace-nowrap">Contact us {name}!</h4>
                <Icon size={25} className="ml-5" />
            </div>

            <p className="text-center text-lg mt-2">{value}</p>
            <button 
                ref={button} 
                onClick={handleClick}
                onMouseOut={handleMouseOut}
                className="text-xl bg-bg-dark-green rounded-full p-3 py-1 mt-1 mb-2"
            >
                Copy
            </button>
        </motion.div>
    );
}