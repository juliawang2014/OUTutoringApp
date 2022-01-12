import { useState, useEffect } from 'react';
import './App.css';
import { auth } from './frontend/services/firebase';
import { getAdditionalUserInfo, onAuthStateChanged } from 'firebase/auth';
import Home from './frontend/components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarSignedOut from './frontend/components/NavBarSignedOut'


function App() {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user);
    })}, []);

  return (
    <div className="App">
        {user ? <Home/> : <NavBarSignedOut/>}
    </div>
  );
}

export default App;