import React, { useState, useEffect } from 'react';
import { Avatar } from 'react-native-paper';

import { Navigation } from '../../../Infrastructure/Navigation';

// Image Url
import { uriLink } from '../../../Services/Axios/axios-api';

// Axios API
import { getUserName } from '../../../Services/API\'s/Story.api';

import { 
    ProfilePost,
    ProfileLabel,
    RoundedBorder
} from '../../Tools/Styled-Components/box-container.component';

export const ViewPost = ({ item }) => {
    const [username, setUsername] = useState();

    useEffect( () => {
        getUserName(item.user_id, setUsername);
    }, [] )

    return (
        <ProfilePost>
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