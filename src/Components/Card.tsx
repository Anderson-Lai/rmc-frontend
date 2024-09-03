

export type Props = {
    image: string,
    title: string,
    body: string,
    link?: string,
    noopen?: boolean
}

export default function Card( { image, title, body, link, noopen } : Props ) {

    function handleClick() {
        if (link && !noopen) {
            window.open(link, "_blank", "noopener,noreferrer");
        }
        else if (link && noopen) {
            window.location.href = link;
        }
    }

    return (
        <div className="border-2 border-border-light-yellow hover:shadow-small-white flex flex-col px-7 pt-3 pb-8
            my-4 rounded-xl hover:-translate-y-2 duration-150 delay-75" onClick={handleClick}>
            <div className="flex justify-end mx-4">
                <img src={image} className="max-w-24" alt="image" />
            </div>
            <h4 className="text-2xl font-semibold mb-2">{title}</h4>
            <p>{body}</p>
        </div>
    );
}