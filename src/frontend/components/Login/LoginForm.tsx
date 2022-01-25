import { Form, Button, Container } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { useFirebaseAuth } from '../../contexts/FirebaseAuthContext';
import GoogleSignIn from '../SignIn';
import './Login.css'

const LoginForm: React.FC = () => {
  const user = useFirebaseAuth();

  if(user != null) {
    return <Navigate to="/"/>
  }

  const loginEmailPassword = () => {
    //Login with email and password from video here
  }

  return (
    <Container className='loginForm'>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" onClick={loginEmailPassword}>Login</Button>
        <GoogleSignIn/>
      </Form>
    </Container>
  )
}

export default LoginForm; 