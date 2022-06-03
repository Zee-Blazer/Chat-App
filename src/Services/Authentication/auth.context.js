import React, { useState, createContext, useEffect } from 'react';

// Asyn Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Firebase initialization
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const Login = (email, pwd) => {
        console.log("Working");
        setIsLoading(true);
        firebase.auth().signInWithEmailAndPassword(email, pwd)
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

    const SignUp = (email, pwd, conPwd) => {
        setIsLoading(true);

        if( pwd === conPwd ) {
            firebase.auth().createUserWithEmailAndPassword(email, pwd)
                .then( user => {
                    setUser(user);

                    setIsLoading(false);
                } )
                .catch( err => {
                    alert(err);
                    setIsLoading(false);
                } );
        }
        else setIsLoading(false);
        
    }

    const Logout = () => {
        firebase.auth().signOut();
    }

    useEffect( () => {
        firebase.auth().onAuthStateChanged( user => {
            if(user !== null) setUser(user);
        } )
    }, [] )

    return (
        <AuthContext.Provider 
            value={{
                isAuthenticated: !!user,
                user,
                Login,
                SignUp,
                Logout,
                isLoading
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}
