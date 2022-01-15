import { useFirebaseAuth } from "../../contexts/FirebaseAuthContext";
import { doc} from "firebase/firestore"; 
import {getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from '../../services/firebase';

const Reservation = () => { 

    let [userInfo, setUserState] = useState();
    const user = useFirebaseAuth();

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
        <button onClick={UserReservation}>Check who is Reserved</button>
    </div>
    )
}


export default Reservation;