import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Avatar } from 'react-native-paper';

// Root Navigation
import * as RootNavigation from '../../../Infrastructure/Navigation/root-navigation';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Api
import api from '../../../Services/Axios/axios-api';

// Application API
import {
    getCurrentFriends,
    getNewFriends,
    addNewFriendRequest,
    getTheUsers,
    allNewRequests
} from '../../../Services/API\'s/Friends.api/findFriends';

import { Entypo } from '@expo/vector-icons';

// Theme styling
import { theme } from '../../../Infrastructure/Theme';

// Image Url Link
import { uriLink } from '../../../Services/Axios/axios-api';

// Auth Context
import { AuthContext } from '../../../Services/Authentication/auth.context';

// Friends Context Version 1.2.0
import { FriendsContext } from '../../../Services/Friends/friends.context';

// Chat Component styling
import {
    ClientMsg,
    ClientChatBox,
    ClientMsgContainer,
    ClientChatTextFirst,
    ClientChatTextDown,
    ResponseMsg
} from '../../../Components/Tools/Styled-Components/chat-screen.component';
import { async } from '@firebase/util';

export const FindFriend = () => {

    const { search, filterData, addFriend, findData, response } = useContext(FriendsContext);

    return (
        <>
            { response ? <ResponseMsg>{ response }</ResponseMsg> : null }

            <ScrollView>
                { findData ? 
                    <FlatList 
                        data={findData}
                        renderItem={({ item }) => {
                        
                            return (
                                <>
                                    <ClientChatBox>
                                        <TouchableOpacity>
                                            <Avatar.Image
                                                size={54}
                                                source={{ uri: `${ item.profile ? uriLink + "profile/pic/" + item.profile : 
                                                    "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg&ga=GA1.2.1411842976.1640908800"    
                                                }` }}
                                            />
                                        </TouchableOpacity>
        
                                        <ClientMsg>
        
                                            <ClientMsgContainer>
                                                <ClientChatTextFirst>
                                                    {item.username}
                                                </ClientChatTextFirst>
        
                                                <TouchableOpacity
                                                    onPress={() => addFriend(item._id)}
                                                >
                                                    <Entypo name="add-user" size={24} color={ theme.colors.dark.icon.secondary } />
                                                </TouchableOpacity>
        
                                            </ClientMsgContainer>
        
                                        </ClientMsg>
        
                                    </ClientChatBox>
                                </>
                            )
                        }}
                        keyExtractor={item => item._id}
                    />
                    : 
                    <Text>Loading...</Text> 
                }
            </ScrollView>
        </>
    )
};
