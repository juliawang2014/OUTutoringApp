import React, { 
  createContext, 
  useEffect, 
  useState, 
  useContext 
} from "react";
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../services/firebase';

//Define our types
type UserType = User | null;
type ContextState = { user: UserType };

const FirebaseAuthContext =
  createContext<ContextState | undefined>(undefined);

//Custom function component for firebase auth
//We can wrap our components inside FirebaseAuthProvider
const FirebaseAuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserType>(null);
  const value = { user };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return unsubscribe;
  }, []);

  return (
    <FirebaseAuthContext.Provider value={value}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};

//Custom hook to get the current authenticated user
//Only works for components that are wrapped inside FirebaseAuthProvider
function useFirebaseAuth() {
  const context = useContext(FirebaseAuthContext);
  if (context === undefined) {
    throw new Error(
      "useFirebaseAuth must be used within a FirebaseAuthProvider"
    );
  }
  return context.user;
}

export { FirebaseAuthProvider, useFirebaseAuth };