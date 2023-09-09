import React, { createContext, useState, useEffect } from 'react'; // Version 1.2.0

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// API call 
import { getCurrentFriends, getTheUsers } from '../API\'s/Friends.api/findFriends';

// Firebase Api call
import { lastMessage, getAllNew } from '../API\'s/ChatBox.api';

export const FriendsContext = createContext();

export const FriendsContextProvider = ({ children }) => {

    const [user_id, setUser_id] = useState();
    const [allIds, setAllIds] = useState();
    const [data, setData] = useState([]);
    const [allNewNotifications, setAllNewNotifications] = useState();

    useEffect( async () => {
        setUser_id( await AsyncStorage.getItem(`@user_id`) );
    }, [] )

    useEffect( () => {
        getCurrentFriends(user_id, setAllIds);
        getAllNew({ setAllNewNotifications, user_id });
    }, [user_id] );

    useEffect( () => {
        setData([]);
        if(allIds){
            getTheUsers(allIds, setData);
        }
        console.log(allNewNotifications)
    }, [allIds] )

    const searchFriend = (e) => {
        console.log(e);
    }

    const getLastMsg = (id, setLastMsg, setMessages, setTime) => {
        const chatId = [id, user_id].sort();
        lastMessage(setMessages, setLastMsg, setTime, chatId);
    }

     const func = () => console.log(allNewNotifications);

    return (
        <FriendsContext.Provider
            value={{
                data,
                searchFriend,
                getLastMsg,
                allNewNotifications,
                func
            }}
        >
            { children }
        </FriendsContext.Provider>
    )
}
