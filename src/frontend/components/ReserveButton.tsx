import { useFirebaseAuth } from "./../contexts/FirebaseAuthContext";
import { ref, set, getDatabase } from "firebase/database";
import { doc, setDoc } from "firebase/firestore";
import { db } from './../services/firebase';

const ReserveButton = () => {
    const user = useFirebaseAuth();
    const userId = user?.uid!;
    const name = user?.displayName!;
    const email = user?.email!;
    const imageUrl = user?.photoURL!;


    const writeUserData = async (userId: string, name: string, email: string, imageUrl: string, tutorName: string) => {
        const database = getDatabase();

        // Creates the profile information for someone and sets it equals 
        // This should be implemented in a different class (Upon login I would assume)
        await setDoc(doc(db, "users", userId), {
            userId: userId,
            name: name,
            email: email,
            profile_url: imageUrl,
            tutorReserved: tutorName
        });
    }

    //tutorReserved cannot be set above as it creates a new string object - final implementation should ignore because it gets data straight from tutor
    return (<button onClick={() => writeUserData(userId, name, email, imageUrl, "Jackson")}>Reserve</button>)
}

export default ReserveButton