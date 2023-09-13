import React, { useState, useEffect } from 'react';

// React native component
import { TouchableOpacity, Image, Dimensions } from 'react-native';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// API call
import { getProfileImage } from '../../../../Services/API\'s/Profile.api';

// Image API
import { uriLink } from '../../../../Services/Axios/axios-api';

// Expo Icons
import { MaterialIcons } from '@expo/vector-icons';

// Styled Component
import { BackgroundCover, ProfileImageDisplay } from "../profile-screen.style";

const DimensionHeight = Dimensions.get("screen").height;

export const ProfilePicDisplay = ({ showPicFunc, type }) => {

    const [userId, setUserId] = useState();
    const [profileImg, setProfileImg] = useState();

    useEffect(async () => {
        if(type.type !== "view"){
            let user = await AsyncStorage.getItem("@user_id")
            setUserId(user);
        }
    }, []);

    useEffect( () => getProfileImage(userId, setProfileImg), [userId] )

    return <BackgroundCover height={ DimensionHeight } onPress={ showPicFunc } >
        <TouchableOpacity>
            <MaterialIcons 
                name="cancel" 
                size={36} 
                color="white" 
                style={{ marginTop: "8%", marginLeft: "89%" }} 
                onPress={ showPicFunc }
            />
        </TouchableOpacity>

        <ProfileImageDisplay 
            source={{ uri: `${ profileImg ? 
                uriLink + "profile/pic/" + profileImg : 
                uriLink + "profile/pic/" + type.profile }` }}
            height={ DimensionHeight }
        />
    </BackgroundCover>
}
