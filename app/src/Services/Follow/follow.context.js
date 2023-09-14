import React, { useState, useEffect, createContext } from 'react'; // Version 1.2.0

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FollowContext = createContext();

export const FollowContextProvider = ({ children }) => {

    const [userId, setUserId] = useState();

    return <>
        <FollowContext.Provider>
            { children }
        </FollowContext.Provider>
    </>
}
