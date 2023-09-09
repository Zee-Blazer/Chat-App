import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';

// Root Navigation
import * as RootNavigation from '../../../Infrastructure/Navigation/root-navigation';

// Friends Context Version 1.2.0
import { FriendsContext } from '../../../Services/Friends/friends.context';

// Image Url Link
import { uriLink } from '../../../Services/Axios/axios-api';

import { Entypo } from '@expo/vector-icons'; 

// Chat Component styling
import { 
    ClientMsg,
    ClientChatBox,
    ClientMsgContainer,
    ClientChatTextFirst,
    ClientChatTextDown,
    ClientChatTextTime
} from '../../../Components/Tools/Styled-Components/chat-screen.component';


// ********************************************************************  //
// This component helps display all the people that are already your friends for chatting
// ******************************************************************** // 

export const ChatClient = ({ userProfile, username, id }) => {

    const { getLastMsg } = useContext(FriendsContext);

    const [lastMsg, setLastMsg] = useState();
    const [time, setTime] = useState();
    const [messages, setMessages] = useState();

    useEffect( () => {
        getLastMsg(id, setLastMsg, setMessages, setTime);
    }, [] )
    
    return (
        <TouchableOpacity onPress={ 
            () => 
                {
                    RootNavigation.navigate( "ChatSub", { screen: "ChatView", params: { id, username, profile: userProfile } } )
                    // console.log(lastMsg)
                }
            
        }>
            <ClientChatBox>
                <TouchableOpacity>
                    <Avatar.Image 
                        size={54}
                        source={{ uri: `${ userProfile ? uriLink + "profile/pic/" + userProfile :
                            "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg&ga=GA1.2.1411842976.1640908800"
                        }` }}
                        style={{ marginTop: 8 }}
                    />
                </TouchableOpacity>

                <ClientMsg>

                    <ClientMsgContainer>
                        <ClientChatTextFirst>{username}</ClientChatTextFirst> 
                        
                        <TouchableOpacity>
                            <Entypo name="dots-three-vertical" size={24} color="black" />
                        </TouchableOpacity>
                        
                    </ClientMsgContainer>
                    
                    <ClientMsgContainer>
                            <ClientChatTextDown>
                                { messages ? 
                                    lastMsg ? 
                                        lastMsg[1] == id ? `Friend: ${lastMsg[0]}` : `You: ${lastMsg[0]}` : 
                                        "Start a conversation." 
                                    : 
                                    "Loading messages..." 
                                }
                            </ClientChatTextDown>
                            <ClientChatTextTime style={{ color: '#D6FF62' }}>
                                { messages && time && time }
                            </ClientChatTextTime>
                    </ClientMsgContainer>
                
                </ClientMsg>
                
            </ClientChatBox>
        </TouchableOpacity>
    )
};