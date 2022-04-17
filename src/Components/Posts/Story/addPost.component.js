import React from 'react';
import { Avatar } from 'react-native-paper'; 

import { 
    ProfilePost,
    ProfileLabel, 
} from '../../Tools/Styled-Components/box-container.component';

export const AddPost = () => (
    <ProfilePost>
        <Avatar.Text size={64} label="+" />
        <ProfileLabel>Add Post</ProfileLabel>
    </ProfilePost>
)