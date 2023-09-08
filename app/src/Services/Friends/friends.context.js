import React, { createContext, useState, useEffect } from 'react'; // Version 1.2.0

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// API call 
import { getCurrentFriends, getTheUsers } from '../API\'s/Friends.api/findFriends';

export const FriendsContext = createContext();

export const FriendsContextProvider = ({ children }) => {

    const [user_id, setUser_id] = useState();
    const [allIds, setAllIds] = useState();
    const [data, setData] = useState([]);

    useEffect( async () => {
        setUser_id( await AsyncStorage.getItem(`@user_id`) );
    }, [] )

    useEffect( () => {
        getCurrentFriends(user_id, setAllIds);
    }, [user_id] );

    useEffect( () => {
        setData([]);
        if(allIds){
            getTheUsers(allIds, setData);
        }
    }, [allIds] )

    const searchFriend = (e) => {
        console.log(e);
    }

    return (
        <FriendsContext.Provider
            value={{
                data,
                searchFriend
            }}
        >
            { children }
        </FriendsContext.Provider>
    )
}
