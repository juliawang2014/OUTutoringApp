import React from 'react';
import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import NavBar from './frontend/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
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
const analytics = getAnalytics(app);
logEvent(analytics, 'notification_received');

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
    </div>
  );
}

export default App;
