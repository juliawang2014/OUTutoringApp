import { Card } from 'react-bootstrap';
//import { Navigate } from 'react-router-dom';
import './Me.css';
import { useFirebaseAuth } from '../../contexts/FirebaseAuthContext';
import { doc, getDoc } from "firebase/firestore";
import {db} from '../../services/firebase';

const Me = () => {
  const user = useFirebaseAuth();

  const fetchUser = async () => {
    //https://firebase.google.com/docs/firestore/query-data/get-data From Get A document
    // get single document from users where the id is given
    const docSnap = await getDoc(doc(db, "users", user?.uid.toString()!));
    console.log("Document data:", docSnap.data());
  }

  // if(user == null) {
  //   return (
  //     <Navigate to="/"/>
  //   );
  // }

  //TODO: Get user info from database here to display role/class standing

  return (
    <div className="myProfile">
      This is me (should only allow authenticated users)

      <div className="centered">
        <Card>
          {/* <Card.Img variant="top" src={user.photoURL} alt='profilePic' width="200" height="200"/> */}
          <Card.Img src={user?.photoURL?.toString()} alt="Profile Image" />
          <Card.Body>
            <Card.Title>{user?.displayName}</Card.Title>
            <Card.Text>Role here</Card.Text>
            <Card.Text>Class standing/major here</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Me;