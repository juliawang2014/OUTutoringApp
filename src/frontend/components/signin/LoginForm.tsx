import { Link } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap';
import '../signin/Login.css';
import { FcGoogle } from 'react-icons/fc';

const LoginForm: React.FC<{onSubmit: ()=> {}}> = (props) => {
  
  return (
    <Container id="login-container" className='loginForm d-flex justify-content-center align-items-center'>
        <Form>
            <h3 className='loginForm-header'>Sign in with your Email</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
            <Form.Group className="login-options mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Keep me signed in" />
                <Link to="/" className="password-reset-text"><p>Reset password</p></Link>
            </Form.Group>
            <div className='d-grid gap-2'>
                <Button variant="primary" type="submit">Login</Button>
            </div>
            <p className='or-text'>or</p>
            <div className='d-grid gap-2'>
                <Button variant="primary" onClick={props.onSubmit}>
                    <FcGoogle />
                    <span>Continue with Google</span>
                </Button>
            </div>
            <Link to='/me'> Next Step</Link>
        </Form>
    </Container>
  )
}

export default LoginForm;