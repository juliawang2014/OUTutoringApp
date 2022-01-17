import { Container, Row, Col } from 'react-bootstrap';
import QAItem from './QAItem';
import './HomePage.css';

const QAccessBar: React.FC = () => {
    return (
        <Container className={"access-bar"}>
                <Row>
                    <Col lg><QAItem>Tutors</QAItem></Col>
                    <Col lg><QAItem>My Schedule</QAItem></Col>
                    <Col lg><QAItem>Chat with a Tutor</QAItem></Col>
                    <Col lg><QAItem>Profile</QAItem></Col>
                </Row>
            </Container>
    )
}

export default QAccessBar;