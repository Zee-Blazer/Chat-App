import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Avatar } from 'react-native-paper';

import { Text, View } from 'react-native';

// Get profile image API
import { getProfileImage } from '../../../Services/API\'s/Profile.api';

// URL link for pictures
import { uriLink } from '../../../Services/Axios/axios-api';

// Styled Grid components
import { GridDisplay } from '../../Tools/Styled-Components/post-card.component';

const PersonThought = styled.Text`
    font-size: 18px;
    margin-left: 12px;
    padding-top: 7px;
`;

export const ProfilePost = ({ user_id, msg }) => {
    const [profile, setProfile] = useState();

    useEffect( () => {
        getProfileImage(user_id, setProfile);
    }, [user_id] )

    
    console.log(profile)

    return (
        <GridDisplay>
            <Avatar.Image 
                size={42}
                source={{ uri: `${profile ? uriLink + 'profile/pic/' + profile : ""}` }} 
            />

            <PersonThought>{ msg }</PersonThought>

        </GridDisplay>
    )
}