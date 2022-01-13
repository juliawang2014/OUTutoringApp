import Database from '../../backend/Database';
import SignIn from './SignIn';
import { useFirebaseAuth } from '../contexts/FirebaseAuthContext';

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
        </>
      ) : (
        <>
          <SignIn/>
        </>
      )}
    </div>
  )
}

export default Home;