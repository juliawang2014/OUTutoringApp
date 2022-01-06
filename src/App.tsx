import './App.css';
import Home from './frontend/components/home/Home';
import SignIn from './frontend/components/signin/SignIn'
import User from './frontend/components/User/User'
import NavBar from './frontend/components/navbar/NavBar';
import Feed from './frontend/components/feed/Feed';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



function App() {
  

  // This contains the main change so far. React Router was used. This one uses Version 6 and an update is required.
  
  return (
    <div className="App">
        
        
        <BrowserRouter>
          {/* The navbar is not wrapped with routes. This means that the navbar will not be reloaded and will remain as it is when the user browses the pages. */}
          <NavBar />
          {/* These represent the current routes that the user can access. This is not a too hard to understand so far but it might get harder down the line when dealing with passing 
          data between the components */}
            <Routes>
              {/* each URL path is associated with the component that needs to be rendered on the page */}
              {/* Guards will also be added later on to prevent users from accessing certain pages without being logged in or having the privileges to do so */}
              <Route path="/" element={<Home />}/>
              <Route path="/login" element={<SignIn />} />
              <Route path="/me" element={<User />} />
              <Route path="/feed" element={<Feed />} />
                
            </Routes>
        </BrowserRouter>
        
    </div>
  );
}
////{user ? <Home user={user}/> : <SignIn />}
export default App;
