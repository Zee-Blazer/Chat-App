import React, { useState, useContext, useEffect } from 'react';
import { ScrollView, FlatList, View, Text } from 'react-native';

// Styled Components...
import { ChatDisplay } from '../chat-view.styles';

// Firebase Database
import { getDatabase, ref, push, onValue } from 'firebase/database';

// Auth Context
import { AuthContext } from '../../../../Services/Authentication/auth.context';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Message Api
import { allMessages } from '../../../../Services/API\'s/ChatBox.api';

// Chat Components
import { LeftDisplaychat } from './chat-left-display.component';
import { RightDisplayChat } from './chat-right-display.component';

export const ChatDisplaySegment = ({ id }) => {

    const DB = getDatabase();

    const [messages, setMessages] = useState();
    const [user_id, setUser_id] = useState();
    const [chatId, setChatId] = useState();

    useEffect( async () => {
        let user = await AsyncStorage.getItem("@user_id")
        setUser_id(user);
    }, [] );

    useEffect( () => {
        console.log("working together")
        if(id, user_id){
            setChatId([id, user_id].sort());
        }
    }, [user_id] )

    useEffect( () => {
        allMessages(setMessages, chatId);
    }, [chatId] )

    return (
        <ChatDisplay>

            { messages ? 
                <FlatList 
                    data={messages}
                    renderItem={ ({item}) => {
                        let user = item.messages.senderId == user_id;

                        console.log(item.messages.time.split(",")[0]);

                        return (
                            <ScrollView>
                                {
                                    user ?
                                    <RightDisplayChat 
                                        ele={ item.messages.msg } 
                                        image={ item.messages.img } 
                                        time={ item.messages.time } 
                                    />
                                    : 
                                    <LeftDisplaychat 
                                        ele={ item.messages.msg } 
                                        image={ item.messages.img } 
                                        time={ item.messages.time } 
                                    />
                                }
                            </ScrollView>
                        )
                    } }
                    keyExtractor={ item => item.id }
                />
            : <Text>Loading all messages from a secure source</Text> }

            
        </ChatDisplay>
    )
}
