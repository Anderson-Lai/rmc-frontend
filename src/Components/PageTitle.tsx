

type PageTitleProps = {
    title: string
}

export default function PageTitle( { title } : PageTitleProps ) {
    return <h1 className="font-bold text-3xl md:text-5xl text-center mt-16">{title}</h1>
}