import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../services/firebase';
import { Button } from 'react-bootstrap';

const GoogleSignIn = () => {
  const signInWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    //googleProvider.setCustomParameters({ prompt: 'select_account' });
    await signInWithPopup(auth, googleProvider);
  }

  return (
    <div>
      <Button variant="primary" onClick={signInWithGoogle}>Sign in with Google</Button>
    </div>
  )
}

export default GoogleSignIn;