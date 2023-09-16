import React, { useState, useEffect, createContext } from 'react'; // Version 1.2.0

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// API call
import { getSpecificUser } from '../API\'s/Profile.api';
import { newFollower, unFollowPerson } from '../API\'s/Follow';

export const FollowContext = createContext();

export const FollowContextProvider = ({ children }) => {

    const [userId, setUserId] = useState();
    const [userDetails, setUserDetails] = useState();
    const [updated, setUpdated] = useState(false);

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
        const user_id = item._id;
        newFollower({user_id, username, id, personname, setUpdated});
    }

    const unFollow = (item) => {
        const username = userDetails.username;
        const id = userId;
        const personname = item.username;
        const user_id = item._id;
        unFollowPerson({user_id, username, id, personname, setUpdated});
    }

    return (
        <FollowContext.Provider
            value={{
                updated,
                startFollowing,
                unFollow
            }}
        >
            { children }
        </FollowContext.Provider>
    )
}
