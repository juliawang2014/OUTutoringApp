import {Button, Container, Navbar, Nav, Form, FormControl} from "react-bootstrap";
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
                            <Nav.Link href="/me">{user.displayName}</Nav.Link>
                            <Button variant="primary" onClick={() => logOut()}>Sign Out</Button>
                        </>
                    ) : (
                        <Button variant="primary">Login</Button>
                    )}
            </Container>
        </Navbar>
    )
}

export default NavBar;