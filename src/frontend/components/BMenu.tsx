import React, { useState } from 'react';
import classes from "./BurgerMenu.module.css";
import { Button, Offcanvas } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';


const BMenu: React.FC = (props) => {
    const [BMenu, setBMenu] = useState(false);

    const toggleBMenu = () => setBMenu((prevBMenu) => (!prevBMenu));

    return (
        <>
            <div className={classes['BurgerMenu']}>
                <Button variant="outline-primary" onClick={toggleBMenu}><FaIcons.FaBars/></Button>
            </div>
            <Offcanvas show={BMenu} onHide={toggleBMenu}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <ul>
                    <li><p>Test Elmenet 1</p></li>
                    <li><p>Test Elmenet 2</p></li>
                    <li><p>Test Elmenet 3</p></li>
                </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default BMenu;