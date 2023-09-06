import React, { useState, useEffect } from 'react';

// React native paper components
import { Avatar } from "react-native-paper";

// Expo icons
import { FontAwesome } from '@expo/vector-icons';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Api call V1.2.0
import { barePost } from '../../../Services/API\'s/Post.api';

// Theme styling
import { theme } from "../../../Infrastructure/Theme";

// Styled components
import { NewPostBox, NewPostInput } from "../../Tools/Styled-Components/box-container.component"

export const NewPost = ({ changeDisplay }) => {

    const [user_id, setUserId] = useState();
    const [msg, setMsg] = useState();

    useEffect(async () => {
        let user = await AsyncStorage.getItem("@user_id");
        setUserId(user);
    }, []);

    const sendPost = () => {
        barePost({user_id, msg});
        setMsg();
    }

    return (
        <NewPostBox>
            <Avatar.Image
                size={42}
                source={{ 
                    uri: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg&ga=GA1.2.1411842976.1640908800" 
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
    )
}
