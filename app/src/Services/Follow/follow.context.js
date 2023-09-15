import React, { useState, useEffect, createContext } from 'react'; // Version 1.2.0

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// API call
import { getSpecificUser } from '../API\'s/Profile.api';
import { newFollower } from '../API\'s/Follow';

export const FollowContext = createContext();

export const FollowContextProvider = ({ children }) => {

    const [userId, setUserId] = useState();
    const [userDetails, setUserDetails] = useState();

    useEffect( async () => {
        let user = await AsyncStorage.getItem("@user_id")
        setUserId(user);
    }, [] )

    useEffect( () => {
        getSpecificUser(userId, setUserDetails);
    }, [userId] )

    const startFollowing = (item) => {
        const username = userDetails.username;
        const id = userId;
        const personname = item.username;
        const user_id = item.user_id;

        console.log(item);
        // newFollower(user_id, username, id, personname);
    }

    const unFollowPerson = () => {}

    return (
        <FollowContext.Provider
            value={{
                startFollowing,
                unFollowPerson
            }}
        >
            { children }
        </FollowContext.Provider>
    )
}
