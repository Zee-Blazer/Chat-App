import React, { useState, useEffect } from 'react';
import { Text, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar, Button } from 'react-native-paper';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Uri-link for images
import { uriLink } from '../../../Services/Axios/axios-api';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Styling from Chat component
import { 
    ClientMsg,
    ClientChatBox,
    ClientMsgContainer,
    ClientChatTextFirst,
    ClientChatTextDown
} from '../../../Components/Tools/Styled-Components/chat-screen.component';

// API call Version 1.2.0
import { getProfileImage, getSpecificUser } from '../../../Services/API\'s/Profile.api';

// API's 
import { acceptRequest } from '../../../Services/API\'s/Notifications';

export const NewFriendsNotification = ({ data, id }) => {

    const navigation = useNavigation();

    const [user_id, setUserId] = useState();
    const [profileImg, setProfile] = useState();
    const [specificUser, setSpecificUser] = useState();

    useEffect(async () => {
        let user = await AsyncStorage.getItem("@user_id");
        setUserId(user);
        getSpecificUser(data.user_id, setSpecificUser);
        getProfileImage(data.user_id, setProfile);
    }, []);

    const doClick = () => {
        const { user_id, username } = data;
        acceptRequest(id, { user_id, username, accepted: true });
    }

    return (
        <>
            <TouchableOpacity 
                onPress={ () => navigation.navigate(
                    "SettingsSub", 
                    { screen: "Profile", params: { 
                        type: "view", 
                        id: specificUser._id, 
                        username: specificUser.username, 
                        profile: specificUser.profile,
                        item: specificUser
                    } }) 
                }
            >

                <ClientChatBox>

                    <Avatar.Image 
                        size={58}
                        source={{ 
                            uri: profileImg ? 
                                uriLink + "profile/pic/" + profileImg 
                                : 
                                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"  
                        }}
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
