import React, { createContext, useState, useEffect } from 'react'; // Version 1.2.0

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// API call 
import { getCurrentFriends, getTheUsers } from '../API\'s/Friends.api/findFriends';

// Firebase Api call
import { lastMessage, getAllNew, getAllNewSpecificId, deleteNotification } from '../API\'s/ChatBox.api';

export const FriendsContext = createContext();

export const FriendsContextProvider = ({ children }) => {

    const [user_id, setUser_id] = useState();
    const [allIds, setAllIds] = useState();
    const [data, setData] = useState([]);
    const [allNewNotifications, setAllNewNotifications] = useState();
    const [allNewNote, setAllNewNote] = useState();
    const [filterData, setFilteredData] = useState();
    const [search, setSearch] = useState(false);

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
    }, [allIds] );

    useEffect( () => {
        if(allNewNote) console.log(allNewNote.length)
    }, [allNewNote] );

    const searchFriend = (text) => {
        if(text.length > 0) {
            setSearch(true)
            setFilteredData(data.filter( e => {
                return e.username.indexOf(text.toLowerCase()) > -1;
            } ))
        }
        else {
            setSearch(false)
        }
    }

    const getLastMsg = (id, setLastMsg, setMessages, setTime) => {
        const chatId = [id, user_id].sort();
        lastMessage(setMessages, setLastMsg, setTime, chatId);
    }

    const specificNote = (setNotify, id) => {
        getAllNewSpecificId(setNotify, user_id, id);
    }

    const deleteSpecificNote = (id) => {
        deleteNotification({ user_id, id });
    }

    return (
        <FriendsContext.Provider
            value={{
                data,
                searchFriend,
                getLastMsg,
                allNewNotifications,
                specificNote,
                allNewNote,
                deleteSpecificNote,
                filterData,
                search
            }}
        >
            { children }
        </FriendsContext.Provider>
    )
}
