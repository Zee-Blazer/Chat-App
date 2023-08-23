import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// React native paper
import { Avatar } from 'react-native-paper';

// Expo Icons
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Post Profile api
import { addProfileImage, getProfileImage } from '../../../Services/API\'s/Profile.api';

// URI-Link for images
import { uriLink } from '../../../Services/Axios/axios-api';

// Theme styling
import { theme } from '../../../Infrastructure/Theme';

// Gallary features
import * as ImagePicker from 'expo-image-picker';

// Styled
import { CoverImage, SideDisplayView, EditProfileImage, MainSpacer } from './profile-screen.style';
import { ActioIconCont } from '../../../Components/Tools/Styled-Components/settings-screen.component';

export const ProfileHeader = () => {
    const [image, setImage] = useState(null);
    const [userId, setUserId] = useState();
    const [profileImg, setProfileImg] = useState();

    const picker = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);

            const imageFileName = result.uri.split("file:/").join("").split('/').pop();
            
            const formData = new FormData();
            formData.append("File", {
                name: imageFileName,
                type: `image/${imageFileName.split('.').pop()}`,
                uri: result.uri
            });  
            formData.append("user_id", userId);

            addProfileImage(formData);
        }
    }

    useEffect(async () => {
        let user = await AsyncStorage.getItem("@user_id")
        setUserId(user);

        getProfileImage(user, setProfileImg);
    }, []);

    return (
        <View>
            <CoverImage
                source={{ uri: "https://cdn-images.zety.com/pages/best_font_for_cover_letter_6.jpg" }}
            />

            <Avatar.Image
                size={114}
                source={{ uri: `${ profileImg ? 
                    uriLink + "profile/pic/" + profileImg : 
                    "https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg" }` }}
                style={styles.profileAvatar}
                onPress={() => console.log("This is working fine")}
            />
            <EditProfileImage
                onPress={picker}
            >
                Profile Edit
            </EditProfileImage>

            <SideDisplayView>
                <ActioIconCont>
                    <MaterialIcons
                        name="image"
                        size={27}
                        color={ theme.colors.dark.icon.tertiary }
                        style={styles.buttonIcon}
                    />
                </ActioIconCont>

                <ActioIconCont>
                    <FontAwesome
                        name="pencil"
                        size={27}
                        color={ theme.colors.dark.icon.primary }
                        style={styles.buttonIcon}
                    />
                </ActioIconCont>
            </SideDisplayView>

            

            <MainSpacer />
        </View>
    )
}

const styles = StyleSheet.create({
    profileAvatar: {
        position: "absolute",
        marginTop: 120,
        marginLeft: 16
    },
    buttonIcon: {
        padding: 7,
        borderRadius: 50,
        borderRadius: 50
    }
})
