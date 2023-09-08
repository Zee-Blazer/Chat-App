import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Avatar } from 'react-native-paper';

import { Text, View } from 'react-native';

// Get profile image API
import { getProfileImage } from '../../../Services/API\'s/Profile.api';

// Get Username API
import { getUserName } from '../../../Services/API\'s/Story.api';

// URL link for pictures
import { uriLink } from '../../../Services/Axios/axios-api';

// Styled Grid components
import { GridDisplay } from '../../Tools/Styled-Components/post-card.component';

const PersonThought = styled.Text`
    font-size: ${ props => props.theme.fontSizes.lg };
    margin-left: ${ props => props.theme.space[4] };
    color: ${ props => props.theme.colors.dark.text.primary };
    width: 324px;
`;

const UsernameInfoText = styled.Text`
    font-size: ${ props => props.theme.fontSizes.medium };
    margin-left: ${ props => props.theme.space[5] };
    font-weight: ${ props => props.theme.fontWeights.regular };
    margin-top: ${ props => props.theme.space[1] };
    color: ${ props => props.theme.colors.dark.text.tertiary };
`;

export const ProfilePost = ({ user_id, msg, type, item }) => {
    const [profile, setProfile] = useState();
    const [username, setUsername] = useState();

    useEffect( () => {
        getProfileImage(user_id, setProfile);
        getUserName(user_id, setUsername);
    }, [user_id] )

    return (
        <GridDisplay>
            <Avatar.Image 
                size={42}
                source={{ uri: `${profile ? uriLink + 'profile/pic/' + profile : ""}` }} 
            />

            { type != "tweet" ? <View>
                <PersonThought
                    onPress={ () => console.log(user_id, username) }
                >{ msg }</PersonThought>
                <UsernameInfoText>{ username && username }</UsernameInfoText>
            </View>
            :
            <View>
                <UsernameInfoText>{ username && username }</UsernameInfoText>
                <PersonThought
                    onPress={ () => console.log(user_id, username) }
                    style={{ marginTop: 6, marginBottom: 4 }}
                >{ msg }</PersonThought>
            </View>}

        </GridDisplay>
    )
}