import React from 'react';
import { auth } from '../services/firebase';

const Home = ({ user }: any) => {
  return (
    <div className="home">
      <h1>Hello, <span></span>{user.displayName}</h1>
      <img src={user.photoURL} alt="" />
      <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
    </div>
  )
}

export default Home;