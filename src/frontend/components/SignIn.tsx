import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../services/firebase';
import { Button } from 'react-bootstrap';

const SignIn = () => {
  const signInWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    //googleProvider.setCustomParameters({ prompt: 'select_account' });
    await signInWithPopup(auth, googleProvider);
  }

  return (
    <div>
      <Button variant="primary" onClick={signInWithGoogle}>Login</Button>
    </div>
  )
}

export default SignIn;