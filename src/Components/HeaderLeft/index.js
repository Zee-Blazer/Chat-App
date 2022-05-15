import React from 'react';
import { Avatar } from 'react-native-paper';

// Icon
import { MaterialIcons } from '@expo/vector-icons';

import { GroupEle } from '../../Features/Post/components/PostViewHeader/post-view-header.styling';

export const HeaderLeft = ({ navigation, route }) => {
    
    return (
        <GroupEle onPress={ () => navigation.goBack() }>
            <MaterialIcons 
                name="arrow-back" 
                size={28} 
                color="white" 
                style={{ marginTop: 5 }} 
            />

            <Avatar.Image 
                size={42}
                source={{ uri: "https://loveshayariimages.in/wp-content/uploads/2021/10/1080p-Latest-Whatsapp-Profile-Images-1.jpg" }}
            />
        </GroupEle>
    )
};
