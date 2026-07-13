import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";




const Header = () => {
    return (
        <header className="pointer-events-auto z-1001 absolute top-5 left-5 flex justify-between gap-5">
            <NavLink
                to={"/profile"}
                className="w-10 h-10 bg-white flex items-center justify-center rounded-2xl border border-black"
            >
                <CgProfile size={30} />
            </NavLink>

            <NavLink
            to={"/"}
            className="text-3xl"
                >
                Logo
            </NavLink>
        </header>
    )
}

export default Header;