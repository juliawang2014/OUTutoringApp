import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import firebase from 'firebase/app';
import { auth } from '../../services/firebase';
import { Link, useNavigate} from 'react-router-dom';
import LoginForm from './LoginForm';
import { Container } from 'react-bootstrap';
import { sign } from 'crypto';

const SignIn = () => {
  //Navigate is used to redirect the page to another one without reloading
  const navigate = useNavigate()


  //Google signin
  const signInWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    //googleProvider.setCustomParameters({ prompt: 'select_account' });
    await signInWithPopup(auth, googleProvider);
    //redirect to the /me page
    navigate('/me')
  }

  
  return (
    
    <Container className='loginForm-container'>
      <LoginForm onSubmit={signInWithGoogle}/>
    </Container>
  )
}

export default SignIn;