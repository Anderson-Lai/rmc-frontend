

export type CardProps = {
    image?: string,
    title: string,
    body: string,
    link?: string,
    noopen?: boolean
}

export default function Card( { image, title, body, link, noopen } : CardProps ) {

    function handleClick() {
        if (link && !noopen) {
            window.open(link, "_blank", "noopener,noreferrer");
        }
        else if (link && noopen) {
            window.location.href = link;
        }
    }

    return (
        <div className="border-2 border-border-light-yellow hover:shadow-medium-white flex flex-col p-3
            my-4 rounded-xl hover:-translate-y-2 duration-150 delay-75" onClick={handleClick}>
            {
                image &&
                <div className="flex justify-end mr-2 mt-2">
                    <img src={image} className="max-w-12" alt="image" />
                </div>
            }
            
            <div className="px-4">
                <h4 className="text-2xl font-semibold mb-2 w-[80%]">{title}</h4>
                <p>{body}</p>
            </div>
        </div>
    );
}