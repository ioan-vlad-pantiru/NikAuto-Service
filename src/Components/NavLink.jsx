import "./NavLink.css"
import { Link } from 'react-router-dom';

function NavLink({to, text, isActive}) {
    return (
        <a href={to} className={isActive ? "header-nav-link header-nav-link-active" : text === "Contact" ? "header-nav-link bg-primary" : "header-nav-link"}>
            <p className="size-xl">{text}</p>
        </a>
    )
}

export default NavLink