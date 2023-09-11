import React, { createContext, useState, useEffect } from 'react'; // Version 1.2.0

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// API call 
import { 
    getCurrentFriends, 
    getTheUsers, 
    getNewFriends, 
    addNewFriendRequest 
} from '../API\'s/Friends.api/findFriends';

// Firebase Api call
import { lastMessage, getAllNew, getAllNewSpecificId, deleteNotification } from '../API\'s/ChatBox.api';

export const FriendsContext = createContext();

export const FriendsContextProvider = ({ children }) => {

    const [user_id, setUser_id] = useState();
    const [user_details, setUser_details] = useState();
    const [allIds, setAllIds] = useState();
    const [data, setData] = useState([]);
    const [findData, setFindData] = useState([]); // The find friends data
    const [allNewNotifications, setAllNewNotifications] = useState();
    const [allNewNote, setAllNewNote] = useState();
    const [filterData, setFilteredData] = useState();
    const [search, setSearch] = useState(false);
    const [response, setResponse] = useState();

    useEffect( async () => {
        setUser_id( await AsyncStorage.getItem(`@user_id`) );
        setUser_details( await AsyncStorage.getItem(`@user_details`) )
    }, [] )

    useEffect( () => {
        getCurrentFriends(user_id, setAllIds);
        getAllNew({ setAllNewNotifications, user_id });
    }, [user_id] );

    useEffect( () => {
        setData([]);
        if(allIds){
            getTheUsers(allIds, setData);
            getNewFriends(user_id, setFindData);
        }
        console.log(allNewNotifications)
    }, [allIds] );

    useEffect( () => {
        if(allNewNote) console.log(allNewNote.length)
    }, [allNewNote] );

    useEffect( () => {
        getNewFriends(user_id, setFindData);
        setTimeout(() => {
            setResponse();
        }, 6000);
    }, [response] )

    // Here it shares for a specific data from data collected from the API
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

    // Calling the API to add a new friend
    const addFriend = (id) => {
        addNewFriendRequest(id, JSON.parse(user_details), setResponse);
    }

    /// Get the last message so it can be displayed in the users chat screen
    const getLastMsg = (id, setLastMsg, setMessages, setTime) => {
        const chatId = [id, user_id].sort();
        lastMessage(setMessages, setLastMsg, setTime, chatId);
    }

    // Here it's calling a firebase API that helps it get the spcific amount of new messages from a users
    const specificNote = (setNotify, id) => {
        getAllNewSpecificId(setNotify, user_id, id);
    }

    // After the user opens a message the Notification should be gone
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
                search,
                addFriend,
                response,
                findData
            }}
        >
            { children }
        </FriendsContext.Provider>
    )
}
