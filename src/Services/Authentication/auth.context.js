import React, { useState, createContext, useEffect } from 'react';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

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

    const [user, setUser] = useState();
    const [user_id, setUser_id] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const Login = (email, pwd) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, pwd)
        .then( async user => {
            setUser(user);
            const user_id = user.user.uid;

            await AsyncStorage.setItem("@user_id", user_id);
            await AsyncStorage.setItem("@user_info", JSON.stringify(user));
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
        .then( async user => {
            setUser(user);
            const user_id = user.user.uid;
            setUser_id(user_id);
            ManageUsers({ username, email, user_id })
            await AsyncStorage.setItem("@user_id", user_id);
            await AsyncStorage.setItem("@user_info", JSON.stringify(user));
            setIsLoading(false);
        } )
        .catch( err => {
            alert(err);
            setIsLoading(false);
        } )

        // SignupApi(email, pwd, setIsLoading)
       
    }

    const createrFunction = async () => {
        const user__identification = await AsyncStorage.getItem('@user_id');
        const user__info = await AsyncStorage.getItem("@user_info");

        const main_info = JSON.parse(user__info);
        
        if( user__identification || user__info )
        {
            setUser_id(user__identification);
            setUser(main_info);
        }

    }

    const LogOut = async () => {
        await AsyncStorage.setItem("@user_id", "");
        await AsyncStorage.setItem("@user_info", "");
        setUser(null);
        signOut(auth);
    }

    useEffect( async () => {
        createrFunction();

        const userIdentification = await AsyncStorage.getItem(`@user_id`);
        if(userIdentification) setUser_id(userIdentification);
        
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
