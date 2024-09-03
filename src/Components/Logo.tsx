

type Props = {
    logo: string
    invisible?: boolean
}

export default function Logo( { logo, invisible } : Props ) {
    return (
        invisible ?
            <div className="max-w-10 md:w-14 lg:w-32 mx-2 flex justify-center items-start invisible" >
                <img src={logo} alt="logo" />
            </div>
        :
            <div className="max-w-18 md:max-w-20 lg:max-w-24 mx-2 flex justify-center items-start" >
                <img src={logo} alt="logo" />
            </div>
    );
}