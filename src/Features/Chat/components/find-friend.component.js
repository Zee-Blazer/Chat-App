import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
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

// Auth Context
import { AuthContext } from '../../../Services/Authentication/auth.context';

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

    // const { user_id } = useContext(AuthContext);

    const [user_id, setUser_id] = useState();
    const [user_details, setUser_details] = useState();
    const [data, setData] = useState();
    const [response, setResponse] = useState();

    useEffect( async () => {
        setUser_id( await AsyncStorage.getItem(`@user_id`));
        setUser_details( await AsyncStorage.getItem(`@user_details`) )
    }, [] )
    useEffect( () => {
        if(user_id){
            getNewFriends(user_id, setData);
        }
    }, [user_id] );

    useEffect( () => {
        setTimeout(() => {
            setResponse();
        }, 6000);
    }, [response] )

    return (
        <>
            { response ? <ResponseMsg>{ response }</ResponseMsg> : null }

            { data ? 
                <FlatList 
                    data={data}
                    renderItem={({ item }) => {
                    
                        return (
                            <>
                                <ClientChatBox>
                                    <TouchableOpacity>
                                        <Avatar.Image
                                            size={58}
                                            source={{ uri: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg&ga=GA1.2.1411842976.1640908800" }}
                                        />
                                    </TouchableOpacity>
    
                                    <ClientMsg>
    
                                        <ClientMsgContainer>
                                            <ClientChatTextFirst>
                                                {item.username}
                                            </ClientChatTextFirst>
    
                                            <TouchableOpacity
                                                onPress={() => addNewFriendRequest(item._id, JSON.parse(user_details), setResponse)}
                                            >
                                                <Entypo name="add-user" size={24} color="blue" />
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
        </>
    )
};
