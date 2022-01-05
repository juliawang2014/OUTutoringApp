import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../services/firebase';

const SignIn = () => {
  const signInWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    //googleProvider.setCustomParameters({ prompt: 'select_account' });
    await signInWithPopup(auth, googleProvider);
  }

  return (
    <div>
      <button className="button" onClick={signInWithGoogle}>
        <i className="fab fa-google"></i> Sign in with google
      </button>
    </div>
  )
}

export default SignIn;