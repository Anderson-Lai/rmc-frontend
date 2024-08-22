import PageTitle from "../Components/PageTitle";
import ContactCard from "../Components/ContactCard";
import { v4 } from "uuid";
import { contacts } from "../Data/ContactData";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function Contact() {
    const [ref, visible] = useInView({ triggerOnce: true });
    const [style, setStyle] = useState("invisible mt-14 mx-5");

    useEffect(() => {
        if (!visible)
            return;

        setStyle(() => "flex flex-col items-center mt-14 mx-5")
    }, [visible]);

    return (
        <>
            <PageTitle title="CONTACT US" />

            <div ref={ref}
                className={style}
            >
                <div className="">
                    {
                        contacts.map((value, index) => {
                            return (
                                    <ContactCard {...value} delay={index * 0.15} key={v4()} />
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}