import React, { useState, useEffect, createContext } from 'react'; // Version 1.2.0

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Axios API call
import { getSpecificUser } from '../API\'s/Profile.api';

export const ProfileContext = () => createContext();

export const ProfileContextProvider = ({ children }) => {

    const [user_id, setUser_id] = useState();
    const [specificUser, setSpecificUser] = useState();

    useEffect( async () => {
        setUser_id( await AsyncStorage.getItem(`@user_id`) );
    }, [] )

    useEffect( () => {
        getSpecificUser(user_id)
    }, [user_id] );

    return (
        <ProfileContext.Provider
            value={{}}
        >
            { children }
        </ProfileContext.Provider>
    )
}
