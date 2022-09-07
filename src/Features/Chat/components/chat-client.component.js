import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';

// Root Navigation
import * as RootNavigation from '../../../Infrastructure/Navigation/root-navigation';

import { Entypo } from '@expo/vector-icons'; 

// Chat Component styling
import { 
    ClientMsg,
    ClientChatBox,
    ClientMsgContainer,
    ClientChatTextFirst,
    ClientChatTextDown
} from '../../../Components/Tools/Styled-Components/chat-screen.component';

export const ChatClient = () => {

    return (
        <TouchableOpacity onPress={ () => RootNavigation.navigate("ChatSub") }>
            <ClientChatBox>
                <TouchableOpacity>
                    <Avatar.Image 
                        size={58}
                        source={{ uri: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg&ga=GA1.2.1411842976.1640908800" }}
                    />
                </TouchableOpacity>

                <ClientMsg>

                    <ClientMsgContainer>
                        <ClientChatTextFirst>Name</ClientChatTextFirst> 
                        
                        <TouchableOpacity>
                            <Entypo name="dots-three-vertical" size={24} color="black" />
                        </TouchableOpacity>
                        
                    </ClientMsgContainer>
                    
                    <ClientMsgContainer>
                            <ClientChatTextDown>Message</ClientChatTextDown>
                            <Text>10:45PM</Text>
                    </ClientMsgContainer>
                
                </ClientMsg>
                
            </ClientChatBox>
        </TouchableOpacity>
    )
};