import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type TypewriterProps = {
    message: string,
    className: string,
    characterDelay?: number
}

export default function TypewriterEffect( { message, className, characterDelay = 55 } : TypewriterProps) {

    const [ref, visible] = useInView({ triggerOnce: true });

    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            if (!visible || index >= message.length + 1)
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