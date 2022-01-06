import {Button, Container, Navbar, Nav, Form, FormControl, NavDropdown} from "react-bootstrap";
import BMenu from '../sidebar/BMenu';
import { Link } from 'react-router-dom';
import '../navbar/NavBar.css';



// This is the navbar which also contains the sidebar, The navbar buttons are not implemented yet
const NavBar: React.FC = (props) => {
    return (
        <Navbar bg="light">
            <BMenu />
            <Container>
                <Link to='/' className="navbar-link"><Navbar.Brand>OU Tutoring</Navbar.Brand></Link>
                <Nav className="me-auto my-2 my-lg-0">
                    <Link to='/' className="navbar-link"><Nav.Link>Home</Nav.Link></Link>
                </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                    </Form>
                    <Link to='/login'><Button variant="primary">Log in</Button></Link>
            </Container>
        </Navbar>
    )
}

export default NavBar;