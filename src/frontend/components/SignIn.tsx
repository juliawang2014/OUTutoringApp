import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../services/firebase';
import { Button } from 'react-bootstrap';
import { doc, getDoc, setDoc } from "firebase/firestore";
import {db} from '../services/firebase';


const GoogleSignIn = () => {
  const signInWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    
    //googleProvider.setCustomParameters({ prompt: 'select_account' });
    await signInWithPopup(auth, googleProvider);
    let user = await signInWithPopup(auth, googleProvider)
    let docSnap = await getDoc(doc(db, "users", user.user.uid))
    if(!docSnap.exists()){
      console.log(user.user)
      let data = {
        name: user.user.displayName,
        email: user.user.email,
        role: 'Student',
      }
      await setDoc(doc(db, "users", user.user.uid), data)
    } else{
      console.log('user was found')
    }
  }

  return (
    <div>
      <Button variant="primary" onClick={signInWithGoogle}>Sign in with Google</Button>
    </div>
  )
}

export default GoogleSignIn;