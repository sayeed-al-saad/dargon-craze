import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

const   AuthProvider = ({children}) => {

    const auth = getAuth(app);

    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect( () =>{
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user in the auth ', currentUser)
            setUser(currentUser)
        });
        return () =>{
            unSubscribe();
        }
    } ,[])

    const logOut = () =>{
        return signOut(auth);
    }

    const authInfo = {
        user,
        createUser,
        logOut
    }



    return (
        <AuthContext.Provider value={authInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default   AuthProvider;