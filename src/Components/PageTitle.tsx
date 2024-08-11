

type Props = {
    title: string
}

export default function PageTitle(  { title } : Props ) {
    return <h1 className="font-bold text-3xl md:text-5xl text-center">{title.toUpperCase()}</h1>
}