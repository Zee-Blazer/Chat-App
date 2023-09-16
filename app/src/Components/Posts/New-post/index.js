import React, { useState, useEffect } from 'react';

// React native paper components
import { Avatar, Text } from "react-native-paper";

// Expo icons
import { FontAwesome } from '@expo/vector-icons';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// API Version 1.2.0
import { getProfileImage } from '../../../Services/API\'s/Profile.api';

// URL pic API Version 1.2.0
import { uriLink } from '../../../Services/Axios/axios-api';

// Api call V1.2.0
import { barePost } from '../../../Services/API\'s/Post.api';

// Theme styling
import { theme } from "../../../Infrastructure/Theme";

// Styled components
import { NewPostBox, NewPostInput } from "../../Tools/Styled-Components/box-container.component"

export const NewPost = ({ changeDisplay }) => {

    const [user_id, setUserId] = useState();
    const [msg, setMsg] = useState();
    const [profileImg, setProfile] = useState();

    useEffect(async () => {
        let user = await AsyncStorage.getItem("@user_id");
        setUserId(user);
        getProfileImage(user, setProfile);
    }, []);

    const sendPost = () => {
        barePost({user_id, msg});
        setMsg();
    }

    return (
    <>
        <NewPostBox>
            <Avatar.Image
                size={42}
                source={{ 
                    uri: profileImg ? 
                        uriLink + "profile/pic/" + profileImg 
                        : 
                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"  
                }}
                style={{ marginRight: 21 }}
            />
            <NewPostInput 
                placeholder="What's on your mind?"
                multiline
                placeholderTextColor={ theme.colors.dark.text.primary }
                onChangeText={ setMsg }
                value={ msg }
            />
            <FontAwesome 
                name={ msg ? "send" : "image" } 
                size={24} 
                color={ theme.colors.dark.icon.primary }
                style={{ marginTop: 12, marginLeft: 21 }} 
                onPress={ () => msg ? sendPost() : changeDisplay("post") }
            />
        </NewPostBox>
    </>
    )
}
