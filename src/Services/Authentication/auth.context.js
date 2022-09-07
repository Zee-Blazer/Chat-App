import React, { useState, createContext, useEffect } from 'react';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// // API's
// import { SignupApi } from '../API\'s/Signup.api\'s';
import { ManageUsers } from '../API\'s/Signup.api\'s';

// Express API
import api from '../Axios/axios-api';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [user_id, setUser_id] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    const Login = (email, password) => {
        setIsLoading(true)
        api.post('/auth/edit/login', { email, password })
        .then( async response => {
            if(!response.data.isAuth) {
                setErrMsg(response.data.msg);
                setIsLoading(false);
            }
            
            await AsyncStorage.setItem("@user_details", JSON.stringify(response.data.user));
            await AsyncStorage.setItem("@user_id", response.data.user._id);
            setUser(response.data);
            setIsLoading(false);
        } )
        .catch( err => {
            console.log(err);
            setIsLoading(false);
        } )
    }

    const SignUp = (email, password, username) => {
        setIsLoading(true);

        api.post('/auth/edit/signup', { email, password, username })
        .then( async response => {
            
            if(!response.data.isAuth) {
                setErrMsg(response.data.msg);
                setIsLoading(false);
            }

            await AsyncStorage.setItem("@user_details", JSON.stringify(response.data));
            await AsyncStorage.setItem("@user_id", response.data._id);
            setUser(response.data);
            setIsLoading(false);
        } )
        .catch( err => {
            console.log(err);
            setIsLoading(false);
        } )
    }

    const createrFunction = async () => {}

    const LogOut = async () => {
        const userDetails = JSON.parse(await AsyncStorage.getItem("@user_details"))
       
        api.post('/auth/edit/logout', userDetails)

        await AsyncStorage.setItem("@user_details", "");
        await AsyncStorage.setItem("@user_id", "");
        setUser(null);
    }

    useEffect( async () => {
        const userDetails = await AsyncStorage.getItem("@user_details");

        if(userDetails){
            setUser(userDetails);
        }
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
                user_id,
                errMsg
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}
