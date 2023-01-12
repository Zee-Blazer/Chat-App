import React from 'react';
import { Text, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar, Button } from 'react-native-paper';

// Styling from Chat component
import { 
    ClientMsg,
    ClientChatBox,
    ClientMsgContainer,
    ClientChatTextFirst,
    ClientChatTextDown
} from '../../../Components/Tools/Styled-Components/chat-screen.component';

// API's 
import { acceptRequest } from '../../../Services/API\'s/Notifications';

export const NewFriendsNotification = ({ data, id }) => {

    const doClick = () => {
        const { user_id, username } = data;
        acceptRequest(id, { user_id, username, accepted: true });
    }

    console.log(data);

    return (
        <>
            <TouchableOpacity>

                <ClientChatBox>

                    <Avatar.Image 
                        size={58}
                        source={{ uri: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg&ga=GA1.2.1411842976.1640908800" }}
                    />

                    <ClientMsg>

                        <ClientMsgContainer>
                            <ClientChatTextFirst>{ data.username }</ClientChatTextFirst> 
                            
                            <TouchableOpacity>
                                <Button mode="contained" onPress={ doClick }>Accept</Button>
                            </TouchableOpacity>
                            
                        </ClientMsgContainer>
                            
                        <ClientMsgContainer>
                                <ClientChatTextDown>Wants to be friends</ClientChatTextDown>
                                <Button mode="contained" color='red'>Decline</Button>
                        </ClientMsgContainer>

                    </ClientMsg>

                </ClientChatBox>    

            </TouchableOpacity>
        </>
    )
}
