

type Props = {
    logo: string
    invisible?: boolean
}

export default function Logo( { logo, invisible } : Props ) {
    return (
        invisible ?
            <div className="sm:max-w-96 md:max-w-32 mx-2 invisible">
                <img src={logo} alt="logo" className="-translate-y-2" />
            </div>
        :
            <div className="sm:max-w-96 md:max-w-32 mx-2">
                <img src={logo} alt="logo" className="-translate-y-2" />
            </div>
    );
}