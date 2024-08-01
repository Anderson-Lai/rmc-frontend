

type Props = {
    title: string
}

export default function PageTitle(  { title } : Props ) {
    return <h1 className="font-bold text-6xl text-center">{title}</h1>
}