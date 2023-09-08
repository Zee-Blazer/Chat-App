import React, { useState, useEffect, useContext } from 'react';
import { Text, FlatList } from 'react-native';

import { ChatClient } from './chat-client.component';

// Api call
import api from '../../../Services/Axios/axios-api';

// Context
import { FriendsContext } from '../../../Services/Friends/friends.context';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Api calls
import {
    getCurrentFriends,
    getTheUsers
} from '../../../Services/API\'s/Friends.api/findFriends';

export const ChatFriends = () => {

    const { data } = useContext(FriendsContext) // Context provider for listing friends Version 1.2.0

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
