import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { useState } from 'react';

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    const closeMenu = () => {
        setNavbarOpen(false)
    }

    return (
        <div className="navigation">
            <nav className="navBar">
                <button onClick={handleToggle}>  {navbarOpen ? (
                    <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
                ) : (
                    <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                )}</button>
                <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                    <li>
                        <a href="#" onClick={handleToggle}>Test Item</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;

