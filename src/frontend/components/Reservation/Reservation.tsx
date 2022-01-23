import { useFirebaseAuth } from "../../contexts/FirebaseAuthContext";
import { doc} from "firebase/firestore"; 
import {getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from '../../services/firebase';
import './Reservation.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Reservation = () => { 

    let [userInfo, setUserState] = useState();
    const user = useFirebaseAuth();
    const [value, onChange] = useState(new Date());

    const UserReservation = async () => {
        let userList: any = []
        const userId = user?.uid!;

        const docSnap = await getDoc(doc(db, "users", userId));
        console.log("Document data:", docSnap.data());

        if (docSnap.exists()) {
            userList.push(
                <div key='random'>{'Reserved ' + docSnap.data().tutorReserved}</div>
            )
        }

        // change user state to rerender the UI and have the user info displayed
        setUserState(userList)
    }
    //Could not get the useEffect to work - would not return an error but did not display the correct information
    /**useEffect(() => {

        const UserReservation = async () => {
            const user = useFirebaseAuth();
            let userList: any = []
            const userId = user?.uid!;

            const docSnap = await getDoc(doc(db, "users", userId));
            console.log("Document data:", docSnap.data());

            if (docSnap.exists()) {
                userList.push(
                    <div key='random'>{'Reserved ' + docSnap.data().tutorReserved}</div>
                )
            }

            // change user state to rerender the UI and have the user info displayed
            setUserState(userList)
        }
        UserReservation();
    }, []) */


    return (
    <div className="Schedule">
        <p>Current Reserved Users</p>
        {userInfo}
        <button onClick={UserReservation} className = 'buttonReserve'>Check who is Reserved</button>
        <Calendar className ='ReserveCalendar' onChange={onChange} value={value} />
    </div>

    )
}


export default Reservation;