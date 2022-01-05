import React, {useEffect, useState} from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";
import {app} from "../../services/firebase"


const db = getFirestore()

function Feed() {
    //All users list state
    let [users, setUsersState] = useState([])
    //Single User state
    let [user, setUserState] = useState()
    
  
    //Fetch single User from database
    const fetchUsers = async () => {
      let userList:any = []
      //query all the documents from the users collection from database
      const querySnapshot = await getDocs(collection(db, "users"));
      //loop through those documents and concatenate each user to usersList
      querySnapshot.forEach((doc) => {
        userList.push(
          <div key ={doc.id}>{'Username ' + doc.data().name+ ' role is ' + doc.data().role + ' id is ' + doc.id}</div>
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
      const docSnap = await getDoc(doc(db, "users", "sSXaxUfSpsq01XPqdzke"));
      console.log("Document data:", docSnap.data());
      // if a user is returned add the user to a list
      if(docSnap.exists()){
        userList.push(
          <div key ='random'>{'Username ' + docSnap.data().name+ ' role is ' + docSnap.data().role}</div>
        )
      }
      // change user state to rerender the UI and have the user info displayed
      setUserState(userList)
      
    }
    
  
    return (
      <div className="App">
        donut sucre au sucre
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
  
  export default Feed;