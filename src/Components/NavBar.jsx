import NavLink from "./NavLink"
import "./NavBar.css"
import "../index.css"

function NavBar(){
    return(
        <nav className="navbar">
            <img src="./Logo/Logo_negru_transparent.png" alt="Logo" className="logo" />
            <ul>
                <NavLink to="/" text="Home" isActive={true}/>
                <NavLink to="/despre"text="Despre" isActive={false}/>
                <NavLink to="/servicii"text="Servicii" isActive={false}/>
                <NavLink to="/galerie"text="Galerie" isActive={false}/>
                <NavLink to="/contact"text="Contact" isActive={false}/>
            </ul>
        </nav>
    )
}

export default NavBar