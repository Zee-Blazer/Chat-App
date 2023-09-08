import React, { useEffect, useState } from 'react';
import { Avatar } from 'react-native-paper';

// Icon
import { MaterialIcons } from '@expo/vector-icons';

// Async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Image Url Link
import { uriLink } from '../../Services/Axios/axios-api';

import { GroupEle } from '../../Features/Post/components/PostViewHeader/post-view-header.styling';

export const HeaderLeft = ({ navigation, route }) => {

    const [profileInfo, setProfileInfo] = useState();

    useEffect(async () => {
        const userDetails = await AsyncStorage.getItem("@user_details");

        if (userDetails) {
            setProfileInfo(JSON.parse(userDetails));
        }
    }, [])

    return (
        <GroupEle onPress={() => navigation.goBack()}>
            <MaterialIcons
                name="arrow-back"
                size={28}
                color="white"
                style={{ marginTop: 5 }}
            />

            <Avatar.Image
                size={42}
                source={{ uri: route.params.profile ? 
                    uriLink + 'profile/pic/' + route.params.profile : 
                    "https://loveshayariimages.in/wp-content/uploads/2021/10/1080p-Latest-Whatsapp-Profile-Images-1.jpg" 
                }}
            />
        </GroupEle>
    )
};
