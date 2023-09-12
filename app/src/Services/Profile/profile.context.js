import React, { createContext, useState, useEffect } from 'react'; // Version 1.2.0

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Axios API call
import { getSpecificUser, updateAbout } from '../API\'s/Profile.api';

export const ProfileContext = createContext();

export const ProfileContextProvider = ({ children }) => {

    const [user_id, setUser_id] = useState();
    const [specificUser, setSpecificUser] = useState();
    const [status, setStatus] = useState(false);

    useEffect( async () => {
        setUser_id( await AsyncStorage.getItem(`@user_id`) );
    }, [] )

    useEffect( () => {
        getSpecificUser(user_id, setSpecificUser);
    }, [user_id] );

    useEffect( () => {
        setTimeout(() => {
            setStatus(false)
        }, 2000);
    }, [status] )

    const updateBio = (bio) => {
        updateAbout(specificUser._id, specificUser.username, specificUser.email, bio, setStatus);
        getSpecificUser(user_id, setSpecificUser);
    }

    return (
        <ProfileContext.Provider
            value={{
                specificUser,
                updateBio,
                status
            }}
        >
            { children }
        </ProfileContext.Provider>
    )
}
