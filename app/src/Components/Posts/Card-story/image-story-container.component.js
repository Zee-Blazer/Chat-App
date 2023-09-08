import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

// Root Navigation
import * as RootNavigation from '../../../Infrastructure/Navigation/root-navigation';

// API calls Version 1.2.0
import { getUserName } from '../../../Services/API\'s/Story.api';
import { getProfileImage } from '../../../Services/API\'s/Profile.api';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Post Gallery URI
import { uriLink } from '../../../Services/Axios/axios-api';

import { ImgStry } from '../../Tools/Styled-Components/post-card.component';

export const StoryImage = ({ imgUri, user_id, item }) => {

    const navigation = useNavigation();

    const [username, setUsername] = useState();
    const [profile, setProfile] = useState();

    useEffect( () => {
        getProfileImage(user_id, setProfile);
        getUserName(user_id, setUsername);
    }, [user_id] )

    return (
        <TouchableOpacity 
            onPress={ () => navigation.navigate(
                "Sub", 
                { 
                    screen: "PostView", 
                    params: { item, username, profile, type: "post" } 
                }
            )}
        >
            <ImgStry
                source={{ uri: `${ imgUri ? uriLink + "post/image/" + imgUri : "" }` }} 
            />
        </TouchableOpacity>
    )
}