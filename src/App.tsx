import { useState, useEffect } from 'react';
import './App.css';
import { auth } from './frontend/services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Home from './frontend/components/Home';
import SignIn from './frontend/components/SignIn'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './frontend/components/NavBar';
import HomePage from './frontend/components/Home/HomePage'


function App() {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user);
    })
  }, []);

  return (
    <div className="App">
        <NavBar />
        <HomePage />
        {user ? <Home user={user}/> : <SignIn />}
    </div>
  );
}

export default App;