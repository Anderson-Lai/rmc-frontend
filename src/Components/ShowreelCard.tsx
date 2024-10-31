import { ReactElement, useEffect, useState } from "react";

export type ShowreelCardProps = {
    media: string,
    title?: string,
    description?: string,
    author: string
    alignMedia: "left" | "right"
}

const videoExtensions = ["mp4", "avi", "mov", "wmv", "mkv", "flv", "webm", "mpeg", "mpg", "3gp", "m4v", "f4v"];
const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "tiff", "tif", "webp", "svg", "heic", "heif", "raw", "ico", "psd", "ai"];

export default function ShowreelCard( { media, title, description, author, alignMedia } : ShowreelCardProps ) {
    
    const [mediaElement, setMediaElement] = useState<ReactElement | null>(null);

    useEffect(() => {
        const extension = media.split(".").pop()?.toLowerCase();
        if (!extension) {
            return;
        }

        if (videoExtensions.includes(extension)) {
            setMediaElement(() => 
                <video loop muted controls className="max-h-[400px] w-auto">
                    <source src={media} type={`video/${extension}`} />
                    Your browser does not support this type of content
                </video>
            )
        }
        else if (imageExtensions.includes(extension)) {
            setMediaElement(() =>
                <img src={media} className="max-h-[400px] w-auto" />
            )
        }
    }, []);

    const text = 
        <div className="flex flex-col justify-center items-center my-5 text-center">
            {
                title &&
                <h3 className="text-xl md:text-3xl font-semibold">{title}</h3>
            }
            {
                description &&
                <p className="text-lg md:text-xl mt-2">{description}</p>
            }
            <p className="text-base md:text-lg italic mt-1">By: {author}</p>
        </div>

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-x-28">
            {
                alignMedia === "left" ?
                <>
                    {mediaElement}
                    {text}
                </>
                    :
                <>
                    {text}
                    {mediaElement}
                </>
            }
        </div>
    );
}