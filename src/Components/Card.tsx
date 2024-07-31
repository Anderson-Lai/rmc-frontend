

type Props = {
    image: string,
    title: string,
    body: string,
}

export default function Card( { image, title, body} : Props ) {
    return (
        <div className="border-2 border-border-light-yellow hover:shadow-small-white flex flex-col px-7 pt-3 pb-8
            my-4 rounded-xl hover:-translate-y-2 duration-150 delay-100" style={{width: "80%"}}>
            <div className="flex justify-end mx-4">
                <img src={image} className="max-w-24" />
            </div>
            <h4 className="text-2xl font-semibold mb-2">{title}</h4>
            <p>{body}</p>
        </div>
    );
}