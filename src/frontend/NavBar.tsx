import {Button, Container, Navbar, Nav, Form, FormControl} from "react-bootstrap";

function NavBar (props: any) {
    return (
        <Navbar bg="light">
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
                    <Button variant="primary">Login</Button>
            </Container>
        </Navbar>
    )
}

export default NavBar;