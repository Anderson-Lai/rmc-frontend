import PageTitle from "../Components/PageTitle";
import ShowreelCard, { ShowreelCardProps } from "../Components/ShowreelCard";
import { showreelElements, mediaOfTheMonth } from "../Data/ShowreelData";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type HeaderProps = {
    heading: string
}

function Header( { heading } : HeaderProps ) {
    return <h2 className="font-semibold text-3xl text-center">{heading}</h2>
}

export default function Showreel() {

    const [selected, setSelected] = useState(0);

    function handleClick(elements: ShowreelCardProps[], mode: "increment" | "decrement") {
        if (mode === "increment") {
            if (selected + 1 >= elements.length) {
                setSelected(() => 0)
            }
            else {
                setSelected((curr) => curr + 1)
            }
        }
        else {
            if (selected - 1 <= -1) {
                setSelected(() => elements.length - 1);
            }
            else {
                setSelected((curr) => curr - 1);
            }
        }
    }

    return (
        <>
            <PageTitle title="SHOWREEL" />
        
            {
                mediaOfTheMonth &&
                <>
                    <div className="mt-24 mb-12">
                        <Header heading="Media of the Month" />
                    </div>
                    <div className="mx-5 lg:mx-24">
                        <ShowreelCard {...mediaOfTheMonth} />
                    </div>
                </>
            }

            <div className="mt-24">
                <Header heading="Exec Team's Showreel" />
            </div>

            <div className="mt-12 mx-5 lg:mx-24 flex justify-center items-center space-x-1 md:space-x-16 h-[400px]">
                <div className="bg-button-hover text-black text-3xl 
                    rounded-full p-2 cursor-pointer"
                    onClick={() => handleClick(showreelElements, "decrement")}
                >
                    <p className="w-[25px] h-[25px] text-center flex items-center justify-center">
                        &#60;
                    </p>
                </div>

                <div className="max-h-[400px] overflow-scroll px-4 w-full">
                    <AnimatePresence mode="wait">
                        <motion.div key={selected}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                            exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
                        >
                            <ShowreelCard {...showreelElements[selected]} />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="bg-button-hover text-black text-3xl 
                    rounded-full p-2 cursor-pointer"
                    onClick={() => handleClick(showreelElements, "increment")}
                >
                    <p className="w-[25px] h-[25px] text-center flex items-center justify-center">
                        &#62;
                    </p>
                </div>
            </div>
        </>
    );
}