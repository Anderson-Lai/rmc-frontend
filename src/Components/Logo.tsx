

type Props = {
    logo: string
    invisible?: boolean
}

export default function Logo( { logo, invisible } : Props ) {
    return (
        invisible ?
            <div className="sm:max-w-96 md:max-w-32 mx-2 invisible flex justify-center items-start -translate-y-10" >
                <img src={logo} alt="logo" />
            </div>
        :
            <div className="sm:max-w-96 md:max-w-32 mx-2 flex justify-center items-start -translate-y-10" >
                <img src={logo} alt="logo" />
            </div>
    );
}