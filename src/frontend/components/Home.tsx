import { auth } from '../services/firebase';
import Database from '../../backend/Database'

const Home = ({ user }: any) => {
  return (
    <div className="home">
      <h1>Hello, <span></span>{user.displayName}</h1>
      <img src={user.photoURL} alt="" />
      <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>

      <Database/>
    </div>
  )
}

export default Home;