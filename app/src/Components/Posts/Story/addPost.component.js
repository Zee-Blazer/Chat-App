import React, { useState, useEffect } from 'react';
import { Avatar } from 'react-native-paper'; 
import { TouchableOpacity } from 'react-native';

// Open Gallary
import * as ImagePicker from 'expo-image-picker';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Api call
import { postStory } from '../../../Services/API\'s/Story.api';

import { 
    ProfilePost,
    ProfileLabel, 
} from '../../Tools/Styled-Components/box-container.component';

export const AddPost = ({ open }) => {
    const [img, setImg] = useState();
    const [userId, setUserId] = useState();
    const [userDetails, setUserDetails] = useState();

    const picker = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if(!result.cancelled){
            setImg(result.uri);
            
            const imageFileName = result.uri.split("file:/").join("").split('/').pop();
            
            const formData = new FormData();
            formData.append("File", {
                name: imageFileName,
                type: `image/${imageFileName.split('.').pop()}`,
                uri: result.uri
            });  
            formData.append("user_id", userId);
            formData.append("msg", userDetails.username);

            postStory(formData);

        }

    }
    
    useEffect(async () => {
        let user = await AsyncStorage.getItem("@user_id")
        let user_details = await AsyncStorage.getItem("@user_details");
        setUserId(user);
        setUserDetails(JSON.parse(user_details));
    }, []);

    return (
        <TouchableOpacity onPress={ () => open("status") }>
            <ProfilePost>
                <Avatar.Text size={54} label="+" style={{ backgroundColor: "#6D6D6D" }} />
                <ProfileLabel>Add Post</ProfileLabel>
            </ProfilePost>
        </TouchableOpacity>
    )
}