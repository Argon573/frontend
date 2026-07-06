import { IoTicketOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
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
                children={<CgProfile size={30} color="black" />}
                text="Профиль"
                target="/profile"
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