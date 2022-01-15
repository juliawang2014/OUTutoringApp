import Database from '../../backend/Database';
import GoogleSignIn from './SignIn';
import { useFirebaseAuth } from '../contexts/FirebaseAuthContext';
import ReserveButton from './ReserveButton';

const Home = () => {
  const user = useFirebaseAuth();

  return (
    <div className="home">
      {user ? (
        <>
          {/* If user is logged in*/}
          <h1>Hello, <span></span>{user.displayName}</h1>
          <img src={user.photoURL?.toString()} alt="" />
          <Database/>
          <ReserveButton/>
        </>
      ) : (
        <>
          <GoogleSignIn/>
        </>
      )}
    </div>
  )
}

export default Home;