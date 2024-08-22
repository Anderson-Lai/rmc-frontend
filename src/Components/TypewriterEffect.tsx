import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
    message: string,
    className: string,
    characterDelay?: number
}

export default function TypewriterEffect({ message, className, characterDelay = 55 } : Props) {

    const [ref, visible] = useInView({ triggerOnce: true });

    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            if (!visible)
                return;
            setIndex(i => i + 1);
            setText(() => message.substring(0, index));
        }, characterDelay);

        return () => clearInterval(id);
    }, [index, visible, text]);

    return (
        text == "" ?
            <div className={className} ref={ref}>
                &nbsp;
            </div>
        :
            <div className={className} ref={ref}>
                {text}
            </div>
    );
}