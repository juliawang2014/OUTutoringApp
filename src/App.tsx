import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";
import { Route, Link, NavLink, BrowserRouter as Router } from 'react-router-dom'
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_YpeR-nCdjPFCbQREO3Bg9Dp4BIWUPpk",
  authDomain: "oututoringdatabase.firebaseapp.com",
  projectId: "oututoringdatabase",
  storageBucket: "oututoringdatabase.appspot.com",
  messagingSenderId: "763676444526",
  appId: "1:763676444526:web:b0eac5aa6892e9a2ac237f",
  measurementId: "G-CC2H30MC7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();


function App() {
  //All users list state
  let [users, setUsersState] = useState([])
  //Single User state
  let [user, setUserState] = useState()

  const [navbarOpen, setNavbarOpen] = useState(false)
  

  //Fetch single User from database
  const fetchUsers = async () => {
    let userList:any = []
    //query all the documents from the users collection from database
    const querySnapshot = await getDocs(collection(db, "users"));
    //loop through those documents and concatenate each user to usersList
    querySnapshot.forEach((doc) => {
      userList.push(
        <div key ={doc.id}>{'Username ' + doc.data().name+ ' age is ' + doc.data().age + ' id is ' + doc.id}</div>
        )
            
    });
    //set new state as the concatenated list 
    // The reason why state is used is because everytime it is updated, the component UI will be rerendered containing the fetched data
    setUsersState(userList)
    
  }
  

  // Fetch single user from database
  const fetchUser = async() => {
    let userList:any = []
    //https://firebase.google.com/docs/firestore/query-data/get-data From Get A document
    // get single document from users where the id is given
    const docSnap = await getDoc(doc(db, "users", "iPWWIldQZVbtwZVNsCyY"));
    console.log("Document data:", docSnap.data());
    // if a user is returned add the user to a list
    if(docSnap.exists()){
      userList.push(
        <div key ='random'>{'Username ' + docSnap.data().name+ ' age is ' + docSnap.data().age}</div>
      )
    }
    // change user state to rerender the UI and have the user info displayed
    setUserState(userList)
  }

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
  
  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
    <div className="App">
      donut sucre au sucre
      <nav className="navBar">
        <button onClick={handleToggle}>  {navbarOpen ? (
    <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
  ) : (
    <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
  )}</button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
          <li>
            <a href="#" onClick={handleToggle}>Test Item</a>
          </li>
        </ul>
      </nav>
      <div>
        <p>This will fetch all users from the db</p>
        {users}
        <button onClick={fetchUsers}>Fetch Users</button>
      </div>
      <hr/>
      <div>
        <p>This will fetch one single user from the db with a specific ID</p>
        {user}
        <button onClick={fetchUser}>Fetch Users</button>
      </div>
      
    </div>
  );
}

export default App;
