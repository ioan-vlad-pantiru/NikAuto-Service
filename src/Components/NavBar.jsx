import NavLink from "./NavLink"
import "./NavBar.css"

function NavBar(){
    return(
        <div className="navbar">
            <img src="Logo.svg" alt="Logo" className="logo" />
            <ul>
                <NavLink text="Home" isActive={true}/>
                <NavLink text="Despre" isActive={false}/>
                <NavLink text="Servicii" isActive={false}/>
                <NavLink text="Contact" isActive={false}/>
            </ul>
        </div>
    )
}

export default NavBar