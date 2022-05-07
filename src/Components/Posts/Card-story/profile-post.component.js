import React from 'react';
import styled from 'styled-components/native';
import { Avatar } from 'react-native-paper';


import { Text, View } from 'react-native';

// Styled Grid components
import { GridDisplay } from '../../Tools/Styled-Components/post-card.component';

const PersonThought = styled.Text`
    font-size: 18px;
    margin-left: 12px;
    padding-top: 7px;
`;

export const ProfilePost = () => {

    return (
        <GridDisplay>
            <Avatar.Image 
                size={42}
                source={{ uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" }} 
            />

            <PersonThought>Testing the profile post</PersonThought>

        </GridDisplay>
    )
}