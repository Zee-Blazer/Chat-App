import React, { useState, useEffect } from 'react';
import { Text, FlatList } from 'react-native';

import { ChatClient } from './chat-client.component';

// Api call
import api from '../../../Services/Axios/axios-api';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Api calls
import {
    getCurrentFriends,
    getTheUsers
} from '../../../Services/API\'s/Friends.api/findFriends';

export const ChatFriends = () => {

    const [user_id, setUser_id] = useState();
    const [allIds, setAllIds] = useState();
    const [data, setData] = useState([]);

    useEffect( async () => {
        setUser_id( await AsyncStorage.getItem(`@user_id`) );
        
    }, [] )

    useEffect( () => {
        getCurrentFriends(user_id, setAllIds, data, setData);
    }, [user_id] );

    useEffect( () => {
        setData([]);
        if(allIds){
            getTheUsers(allIds, data, setData);
        }
    }, [allIds] )

    return (
        <>
            { !data ?
                <Text>Add Friends</Text>
            :
                <FlatList 
                    data={ data }
                    renderItem={ ({item}) => {

                        return (
                            <>
                                <ChatClient userProfile={ item.profile } username={ item.username } id={ item._id } />
                            </>
                        )
                    } } 
                    keyExtractor={ item => item }
                />
            }
        </>
    )
}
