import React from "react";
import { Container, Form, FormControl, Stack} from "react-bootstrap";
import './HomePage.css'
import QAccessBar from "./QAccessBar";

const HomePage: React.FC = () => {
    return (
        <Stack>
            <Container className={"top-container"}>
                <Container className={"inner-container"}>
                    <h1 className={"homepage-logo"}>TutorDen</h1>
                    <Form className="d-flex">
                                <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                /></Form>
                </Container>
            </Container>
            <QAccessBar />
        </Stack>
    )
}

export default HomePage;