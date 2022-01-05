import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/firebase';



const User = () => {
    // state of current user
    const [user, setUser] = useState<any>();
    const navigate = useNavigate()


    useEffect(() => {
        //keep track if this component is mounted or not, if it is mounted update user state else skip
        let isMounted = true;
        onAuthStateChanged(auth, user => {
        if(isMounted) setUser(user);
        })
        return () =>{ isMounted  = false}
    }, []);   


    // sign out user and redirect to home page
    const handleSignOut = async() =>{
        await auth.signOut()
        navigate('/')
    }
    return (
        <div className="home">
        <h1>Hello, <span></span>{user?.displayName }</h1>
        <img src={user?.photoURL} alt="" />
        <button className="button signout" onClick={() => handleSignOut()}>Sign out</button>
        </div>
    )
    }

    export default User;