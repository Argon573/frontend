import { IoTicketOutline } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import NavButton from "./NavButton.jsx";

const NavBar = () => {
    return (
        <nav className="flex justify-between">

            <NavButton
                children={<IoTicketOutline size={30} color="black" />}
                text="Билеты"
                target="/"
            />

            <NavButton
                children={<FaMapLocationDot size={30} color="black" />}
                text="Главная"
                target="/"
            />

            <NavButton
                children={<IoSettingsOutline size={30} color="black" />}
                text="Настройки"
                target="/settings"
            />
        </nav>
    )
}

export default NavBar;