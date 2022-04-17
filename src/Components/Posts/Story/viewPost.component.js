import React from 'react';
import { Avatar } from 'react-native-paper';

import { 
    ProfilePost,
    ProfileLabel,
    RoundedBorder
} from '../../Tools/Styled-Components/box-container.component';

export const ViewPost = () => (
    <ProfilePost>
        <RoundedBorder>
            <Avatar.Image 
                size={64} 
                source={{ uri: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg&ga=GA1.2.1411842976.1640908800" }} 
            />
        </RoundedBorder>
        <ProfileLabel>Person's Name</ProfileLabel>
    </ProfilePost>
)