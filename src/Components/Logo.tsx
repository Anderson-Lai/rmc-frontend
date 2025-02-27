

type LogoProps = {
    logo: string
}

function reRouteToHome() {
    location.href = "/"
}

export default function Logo( { logo } : LogoProps ) {
    return (
        <div className="max-w-18 md:max-w-20 lg:max-w-24 mx-2 flex justify-center items-start" >
            <img src={logo} alt="logo" className="cursor-pointer" onClick={reRouteToHome} />
        </div>
    );
}