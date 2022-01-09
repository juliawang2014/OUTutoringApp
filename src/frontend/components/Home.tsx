import { auth } from '../services/firebase';
import Database from '../../backend/Database';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import SignIn from './SignIn';

const Home = () => {
  const { user, setUser } = useContext<any>(UserContext);

  const signout = async () => {
    await auth.signOut();
    setUser(null);
  }

  return (
    <div className="home">
      {user ? (
        <>
          {/* If user is logged in*/}
          <h1>Hello, <span></span>{user.displayName}</h1>
          <img src={user.photoURL} alt="" />
          <button className="button signout" onClick={() => signout()}>Sign out</button>

          <Database/>
        </>
      ) : (
        <SignIn/>
      )}
    </div>
  )
}

export default Home;