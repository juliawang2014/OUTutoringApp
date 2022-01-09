import {Button, Container, Navbar, Nav, Form, FormControl, NavDropdown} from "react-bootstrap";
import BMenu from './BMenu';
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';   

const NavBar: React.FC = (props) => {
    const { user } = useContext<any>(UserContext);

    return (
        <Navbar bg="light">
            <BMenu />
            <Container>
                <Navbar.Brand href="/">TutorDen</Navbar.Brand>
                <Nav className="me-auto my-2 my-lg-0">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                    </Form>
                    {user ? (
                        <p>Hello <Link to="/me">{user.displayName}</Link></p>
                    ) : (
                        <Button variant="primary">Login</Button>
                    )}
            </Container>
        </Navbar>
    )
}

export default NavBar;