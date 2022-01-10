import { Card } from 'react-bootstrap';
//import { Navigate } from 'react-router-dom';
import './Me.css';
import { useFirebaseAuth } from '../../contexts/FirebaseAuthContext';

const Me = () => {
  const user = useFirebaseAuth();

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