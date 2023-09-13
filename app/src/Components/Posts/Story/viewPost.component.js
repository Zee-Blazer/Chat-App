import React, { useState, useEffect } from 'react';
import { Avatar } from 'react-native-paper';

import { Navigation } from '../../../Infrastructure/Navigation';

// Image Url
import { uriLink } from '../../../Services/Axios/axios-api';

// Main navigator
import { useNavigation } from '@react-navigation/native';

// Axios API
import { getUserName } from '../../../Services/API\'s/Story.api';
import { getProfileImage } from '../../../Services/API\'s/Profile.api';

import { 
    ProfilePost,
    ProfileLabel,
    RoundedBorder
} from '../../Tools/Styled-Components/box-container.component';

export const ViewPost = ({ item }) => {

    const navigation = useNavigation();

    const [username, setUsername] = useState();
    const [profile, setProfile] = useState();

    useEffect( () => {
        getUserName(item.user_id, setUsername);
        getProfileImage(item.user_id, setProfile);
    }, [] )

    return (
        <ProfilePost
            onPress={ () => {
                navigation.navigate(
                "Sub", 
                { 
                    screen: "PostView", 
                    params: { item, username, profile, type: "status" } 
                }
            )
            console.log(item);
        }}>
            <RoundedBorder>
                <Avatar.Image 
                    size={48} 
                    source={{ uri: uriLink + "status/image/" + item.fileUrl }} 
                />
            </RoundedBorder>
            <ProfileLabel>{ username && username }</ProfileLabel>
        </ProfilePost>
    )
}