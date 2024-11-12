import { motion } from "framer-motion";
import { useRef } from "react";

export type ContactCardProps = {
    name: string,
    displayedValue: string,
    action: "goto" | "copy",
    actionValue: string,
    delay?: number,
}

export default function ContactCard( { name, displayedValue, action, actionValue, delay } : ContactCardProps ) {
    
    const button = useRef<HTMLButtonElement | null>(null);

    async function handleClick() {
        if (action == "goto") {
            window.open(actionValue, "_blank", "noreferrer,noopener");
        }
        else if (action == "copy") {
            await window.navigator.clipboard.writeText(actionValue);
        }
    }

    function handleMouseOut() {
        if (action == "copy") {
            setTimeout(() => {
                button.current!.textContent = "Copy";
            }, 225);
        }
    }

    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: delay, duration: 0.75, ease: "backOut" }}
            className="border-border-light-yellow border-2 rounded-lg flex flex-col 
            items-center w-full py-1 px-4 mb-5"
        >
            <div className="text-xl md:text-2xl font-semibold flex justify-center items-center mb-1">
                <h4 className="whitespace-nowrap">{name}</h4>
            </div>

            <hr className="border-white w-full" />

            <p className="text-center text-lg mt-1">{displayedValue}</p>
            <button 
                ref={button} 
                onClick={handleClick}
                onMouseOut={handleMouseOut}
                className="text-xl bg-bg-dark-green rounded-full p-3 py-[2px] mt-1 mb-2 hover:scale-105 duration-75"
            >
                {
                    action == "goto" ?
                    <>
                        Go
                    </>
                    :
                    <>
                        Copy
                    </>
                }
            </button>
        </motion.div>
    );
}