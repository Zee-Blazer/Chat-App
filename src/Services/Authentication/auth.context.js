import React, { useState, createContext, useEffect } from 'react';

// Firebase initialization
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
// import firebase from 'firebase/compat/app';
// import "firebase/compat/auth";

// // API's
// import { SignupApi } from '../API\'s/Signup.api\'s';
import { ManageUsers } from '../API\'s/Signup.api\'s';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const auth = getAuth();

    const [user, setUser] = useState(false);
    const [user_id, setUser_id] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const Login = (email, pwd) => {
        console.log("Working");
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, pwd)
        .then( user => {
            setUser(user);
            console.log(user);
            setIsLoading(false);
        } )
        .catch( err => {
            alert(err);
            setIsLoading(false);
        } )
    }

    const SignUp = (email, pwd, username) => {
        setIsLoading(true);
        const password = pwd;

        createUserWithEmailAndPassword(auth, email, password)
        .then( user => {
            const user_id = user.user.uid;
            setUser_id(user_id);
            ManageUsers({ username, email, user_id })
            setUser(user);
            setIsLoading(false);
        } )
        .catch( err => {
            alert(err);
            setIsLoading(false);
        } )

        // SignupApi(email, pwd, setIsLoading)
       
    }

    const LogOut = () => {
        setUser(null);
        signOut(auth);
    }

    useEffect( () => {
        console.log(user);
    }, [] )

    return (
        <AuthContext.Provider 
            value={{
                isAuthenticated: !!user,
                user,
                Login,
                SignUp,
                LogOut,
                isLoading,
                user_id
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}
