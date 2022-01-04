import React, { useState } from 'react';
import { Nav, Button, Offcanvas } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../sidebar/sidebar.css"

const BMenu: React.FC = (props) => {
    //Keep state of sidebar (open or closed)
    const [BMenu, setBMenu] = useState(false);

    // toggle the sidebar when hamburger menu is clicked
    const toggleBMenu = () => setBMenu((prevBMenu) => (!prevBMenu));

    return (
        <div>
            <div className='BurgerMenu'>
                <Button variant="outline-dark" onClick={toggleBMenu}><FaIcons.FaBars/></Button>
            </div>
                <Offcanvas className={'ff'} show={BMenu} onHide={toggleBMenu}>
                    <Offcanvas.Header className="menu-border" closeButton>
                    <Offcanvas.Title >Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='rm-padding'>
                    <Nav className="me-auto">
                        {/* THESE ARE LINKS FOR THE ROUTER, the router does not reload the page, it removes the currently mounted component AKA page and loads the one we click on */}
                        <Link className="text-color nav-link" to='/'> Home</Link>
                        <Link className="text-color nav-link" to='/login'> SignUp</Link>
                        <Link className="text-color nav-link" to='/me'> Profile</Link>
                        <Link className="text-color nav-link" to='/feed'> Fetch Users</Link>
                    </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            
        </div>
    )
}

export default BMenu;