import './App.css';
import Home from './frontend/components/Home';
import Me from './frontend/components/Me/Me';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './frontend/components/NavBar';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { FirebaseAuthProvider } from "./frontend/contexts/FirebaseAuthContext";

function App() {
  return (
    <div className="App">
      <Router>
        <FirebaseAuthProvider>
          <NavBar />
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/me" element={<Me/>}/>
          </Routes>
        </FirebaseAuthProvider>
      </Router>
    </div>
  );
}

export default App;