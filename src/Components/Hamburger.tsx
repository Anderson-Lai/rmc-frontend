import { useRef } from "react";


// type Props = {
//     links: object,
// }
// { links } : Props 

export default function Hamburger() {

    const menu = useRef<HTMLDivElement | null>(null);

    function displayMenu() {
        menu.current?.classList.toggle("hidden");
    }

    return (
        <div className="sm:min-w-96 md:min-w-32 mx-2 flex flex-col items-center">
            <div ref={menu} className="absolute top-0 left-16 w-16 hidden translate-x-full" id="menu" style={{width: "100vw"}}>
                <p>hello world</p>
            </div>
            <div className="" style={{width: "30px"}} onClick={displayMenu}>
                <hr className="border border-white my-2" />
                <hr className="border border-white my-2" />
                <hr className="border border-white my-2" />
            </div>
        </div>
    );
}