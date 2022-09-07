import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';

// Root Navigation
import * as RootNavigation from '../../../Infrastructure/Navigation/root-navigation';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Application API
import { 
    getCurrentFriends, 
    getNewFriends ,
    getTheUsers
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
    ClientChatTextDown
} from '../../../Components/Tools/Styled-Components/chat-screen.component';

export const FindFriend = () => {

    const { user_id } = useContext(AuthContext);

    const [people, setPeople] = useState();
    const [data, setData] = useState();
    const [users, setUsers] = useState([]);
    const [userIdentification, setUserIdentification] = useState();

    const checker = () => {
        if(users) return (
            <FlatList 
                data={ users }
                renderItem={ ({ item }) => {
                    // console.log(item)

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
                                            onPress={ () => {
                                                console.log("Doing something great")
                                            } }
                                        >
                                            <Entypo name="add-user" size={24} color="blue" />
                                        </TouchableOpacity>
                                        
                                    </ClientMsgContainer>
                                
                                </ClientMsg>
                                
                            </ClientChatBox>
                        </>
                    )
                } }
                keyExtractor={ item => item._id }
            />
        )
        return <Text>Loading...</Text>
    }

    const storeUserId = async () => {
        const toBeStored = await AsyncStorage.getItem(`@user_id`);
        setUserIdentification(toBeStored)
    }

    useEffect( () => {
        getCurrentFriends(setPeople);
        storeUserId();
    }, [] )

    useEffect( () => {
        getNewFriends(setData)
    }, [people] )

    useEffect( () => {
        getTheUsers(people, data, setUsers, users, userIdentification);
    }, [data] );

    // console.log(users);

    return (
        <>
            { checker() } 
        </>
    )
};
