import { NavLink } from 'react-router-dom';

const NavButton = ({ children, text, target }) => {
    return (
        <NavLink
            className="w-12.5 h-12.5 flex flex-col justify-center items-center text-sm text-black"
            to={target}
        >
            <div> {children} </div>
            <div> {text} </div>
        </NavLink>
    )
}

export default NavButton;