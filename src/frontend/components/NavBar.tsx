import React from "react";
import {Button, Container, Navbar, Nav, Form, FormControl, Image} from "react-bootstrap";
import BMenu from './BMenu';
import Profile from './Profile';

const NavBar: React.FC = (props) => {
    return (
        <Navbar bg="light">
            <BMenu />
            <Container>
                <Navbar.Brand href="#home">OU Tutoring</Navbar.Brand>
                <Nav className="me-auto my-2 my-lg-0">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                    </Form>       
                <Profile/>             
            </Container>
        </Navbar>
    )
}

export default NavBar;