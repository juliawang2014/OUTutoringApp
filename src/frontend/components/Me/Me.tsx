import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Card } from 'react-bootstrap';
import './Me.css';

const Me = () => {
  const { user, setUser } = useContext<any>(UserContext);

  return (
    <div className="myProfile">
      This is me (should only allow authenticated users)

      <div className="centered">
        <Card>
          {/* <Card.Img variant="top" src={user.photoURL} alt='profilePic' width="200" height="200"/> */}
          <img src={user.photoURL} alt="" />
          <Card.Body>
            <Card.Title>{user.displayName}</Card.Title>
            <Card.Text>Role here</Card.Text>
            <Card.Text>Class standing/major here</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Me;