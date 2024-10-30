import { ReactElement, useEffect, useState } from "react";

export type ShowreelCardProps = {
    media: string,
    title: string,
    description: string,
    author: string
    alignVideo: "left" | "right"
}

const videoExtensions = ["mp4", "avi", "mov", "wmv", "mkv", "flv", "webm", "mpeg", "mpg", "3gp", "m4v", "f4v"];
const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "tiff", "tif", "webp", "svg", "heic", "heif", "raw", "ico", "psd", "ai"];

export default function ShowreelCard( { media, title, description, author, alignVideo } : ShowreelCardProps ) {
    
    const [mediaElement, setMediaElement] = useState<ReactElement | null>(null);

    useEffect(() => {
        const extension = media.split(".").pop();
        if (!extension) {
            return;
        }

        if (videoExtensions.includes(extension)) {
            setMediaElement(() => 
                <video controls className="max-w-[650px] w-full">
                    <source src={media} type={`video/${extension}`} />
                    Your browser does not support this type of content
                </video>
            )
        }
        else if (imageExtensions.includes(extension)) {
            setMediaElement(() =>
                <img src={media}>

                </img>
            )
        }
    }, []);

    const text = 
        <div className="flex flex-col justify-center items-center my-5">
            <h3 className="text-3xl mb-3 font-semibold">{title}</h3>
            <p className="text-xl text-center">{description}</p>
            <p className="text-lg italic mt-2">By: {author}</p>
        </div>

    return (
        alignVideo == "left" ?
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-x-28">
                {mediaElement}
                {text}
            </div>
        :
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-x-28">
                {text}
                {mediaElement}
            </div>
    );
}