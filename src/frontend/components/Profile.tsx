import React from 'react';
import { Button,  Dropdown, Image} from 'react-bootstrap';
import { auth} from '../services/firebase';


const Profile: React.FC = () => {
    const user = auth.currentUser!;
    const displayName = user.displayName!;
    const photoURL = user.photoURL!;

    return (
        <Dropdown>
            <Dropdown.Toggle variant="white" id="imageDropDown">
                <img src={photoURL} width = "40" height = "40" className ="rounded-circle"/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item>Your on {displayName}</Dropdown.Item>
                <Dropdown.Item button="Profile">Profile</Dropdown.Item>
                <Dropdown.Item button="Schedule">Schedule</Dropdown.Item>
                <Dropdown.Item button="SignOut" onClick={() => auth.signOut()}>Sign Out</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Profile;