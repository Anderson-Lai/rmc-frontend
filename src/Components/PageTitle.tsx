

type Props = {
    title: string
}

export default function PageTitle(  { title } : Props ) {
    return <h1 className="font-bold text-3xl md:text-5xl text-center mt-16">{title}</h1>
}