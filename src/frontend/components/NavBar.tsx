import {Container, Navbar, Nav, Form, FormControl, Dropdown, Button} from "react-bootstrap";
import BMenu from './BMenu';
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";

const NavBar: React.FC = (props) => {
    const user = useFirebaseAuth();

    const logOut = async () => {
        await signOut(auth);
    }

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
                        <>
                            <Dropdown>
                                <Dropdown.Toggle variant="white" id="imageDropDown">
                                    <img src={user?.photoURL?.toString()} 
                                         width="40" 
                                         height="40" 
                                         className="rounded-circle"
                                         alt="Profile Picture"/>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>Hello {user?.displayName}</Dropdown.Item>
                                    <Dropdown.Item button="Profile" href="/me">Profile</Dropdown.Item>
                                    <Dropdown.Item button="Schedule">Schedule</Dropdown.Item>
                                    <Dropdown.Item button="SignOut" onClick={() => logOut()}>Sign Out</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </>
                    ) : (
                        <Button variant="primary" href="/login">Login</Button>
                    )}
            </Container>
        </Navbar>
    )
}

export default NavBar;