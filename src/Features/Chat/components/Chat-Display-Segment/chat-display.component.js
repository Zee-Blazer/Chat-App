import React, { useState, useContext, useEffect } from 'react';
import { ScrollView, FlatList, View, Text } from 'react-native';

// Styled Components...
import { ChatDisplay } from '../chat-view.styles';

// Firebase Database
import { getDatabase, ref, push, onValue } from 'firebase/database';

// Auth Context
import { AuthContext } from '../../../../Services/Authentication/auth.context';

// Message Api
import { allMessages } from '../../../../Services/API\'s/ChatBox.api';

// Chat Components
import { LeftDisplaychat } from './chat-left-display.component';
import { RightDisplayChat } from './chat-right-display.component';

import { ChatDisplayer } from './chat-displayer.component';

export const ChatDisplaySegment = () => {

    const DB = getDatabase();
    const { user_id } = useContext(AuthContext);

    const [messages, setMessages] = useState();

    useEffect( () => {
        onValue(ref(DB, 'Messages'), (snapshot) => {
            const msg = [];
            snapshot.forEach( childSnapshot => {
                msg.push({ 
                id: childSnapshot.key, ...childSnapshot.val()
            }) })
            setMessages(msg);
        } )

        
    }, [] )

    return (
        <ChatDisplay>

            { messages && 
                <FlatList 
                    data={messages}
                    renderItem={ ({ item }) => {
                        // console.log(item.user_id, user_id);
                        // const checker = item.messages.id == user_id;
                        // console.log(item.messages);

                        return (
                            <View>
                                <Text>{ item.messages.msg } - { checker.toString() }</Text>
                                {/* <Text>`{ user_id } ~ = ~ { item.messages.id } `</Text> */}
                            </View>
                        ) 
                    }}
                    keyExtractor={ item => item.id }
                /> 
            }

        </ChatDisplay>
    )
}
