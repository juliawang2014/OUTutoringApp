import { useState, useEffect, useMemo } from 'react';
import './App.css';
import { auth } from './frontend/services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Home from './frontend/components/Home';
import Me from './frontend/components/Me/Me';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './frontend/components/NavBar';
import { Routes, Route } from 'react-router';
import { UserContext } from './frontend/contexts/UserContext';

function App() {
  const [user, setUser] = useState<any>(null);
  const value: any = useMemo(() => ({user, setUser}), [user, setUser]);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user);
    })
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={value}>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/me" element={<Me/>}/>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;