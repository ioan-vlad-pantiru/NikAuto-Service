import "./NavLink.css"

function NavLink({text, isActive}) {
    return (
        <div className={isActive ? "header-nav-link header-nav-link-active":"header-nav-link"}>
            <p className="size-xl">{text}</p>
        </div>
    )
}

export default NavLink