import './App.css';
import Home from './frontend/components/Home';
import Me from './frontend/components/Me/Me';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './frontend/components/NavBar';
import Schedule from './frontend/components/Reservation/Reservation';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { FirebaseAuthProvider } from "./frontend/contexts/FirebaseAuthContext";
import LoginForm from './frontend/components/Login/LoginForm';

function App() {
  return (
    <div className="App">
      <Router>
        <FirebaseAuthProvider>
          <NavBar />
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<LoginForm/>}/>
              <Route path="/me" element={<Me/>}/>
              <Route path="/schedule" element={<Schedule/>}/>
          </Routes>
        </FirebaseAuthProvider>
      </Router>
    </div>
  );
}

export default App;