import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// React native paper
import { Avatar } from 'react-native-paper';

// Expo Icons
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Context Importation Version 1.2.0
import { FollowContext } from '../../../Services/Follow/follow.context';

// Context provider
import { ProfileContext } from '../../../Services/Profile/profile.context';

// Post Profile api
import { 
    addProfileImage, 
    getProfileImage, 
    addCoverImage, 
    getCoverImage 
} from '../../../Services/API\'s/Profile.api';

// URI-Link for images
import { uriLink } from '../../../Services/Axios/axios-api';

// Theme styling
import { theme } from '../../../Infrastructure/Theme';

// Gallary features
import * as ImagePicker from 'expo-image-picker';

// Styled
import { 
    CoverImage, 
    SideDisplayView, 
    EditProfileImage, 
    MainSpacer,
    Follow,
    FollowText
} from './profile-screen.style';
import { ActioIconCont } from '../../../Components/Tools/Styled-Components/settings-screen.component';

export const ProfileHeader = ({ showPicFunc, type }) => {

    const { startFollowing } = useContext(FollowContext);

    const [image, setImage] = useState(null);
    const [userId, setUserId] = useState();
    const [profileImg, setProfileImg] = useState();
    const [coverImg, setCoverImg] = useState();
    const [isFollower, setIsFollower] = useState();

    const picker = async ( type ) => {
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

            if(type == "pic"){
                addProfileImage(formData);
            }
            else {
                addCoverImage(formData);
            }
        }
    }

    useEffect(async () => {
        let user = await AsyncStorage.getItem("@user_id")
        setUserId(user);

        if(type.type !== "view"){
            getProfileImage(user, setProfileImg);
            getCoverImage(user, setCoverImg);
        }
        else{
            getProfileImage(type.id, setProfileImg);
            getCoverImage(type.id, setCoverImg);
        }
    }, []);

    useEffect( () => {
        if(type.type == 'view'){
            setIsFollower(type.item.followers.some( item => item.user_id === userId ))
        }
    }, [userId] )

    return (
        <View>
            <TouchableOpacity onPress={ () => {
                if(type.type !== "view"){
                    picker("cover")
                }
            } }>
                <CoverImage
                    source={{ uri: `${ 
                        coverImg ? 
                        uriLink + "profile/pic/" + coverImg : 
                        "https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg" 
                        }` 
                    }}
                />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={ showPicFunc }
                style={styles.profileAvatar}
            >
                <Avatar.Image
                    size={114}
                    source={{ uri: `${ profileImg ? 
                        uriLink + "profile/pic/" + profileImg : 
                        "https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg" }` }}
                    // style={styles.profileAvatar}
                />
            </TouchableOpacity>
            {
                type.type !== "view" &&
                <EditProfileImage
                    onPress={ () => picker("pic") }
                >
                    Profile Edit
                </EditProfileImage>
            }

            <SideDisplayView>
                {
                    type.type !== "view" ?
                        <>
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
                        </> : 
                        <Follow 
                            big={ true } 
                            flw={isFollower ? isFollower : ""} 
                            style={{ marginBottom: 2 }}
                            onPress={ () => isFollower ? "" : startFollowing(type.item) }
                        >
                            <FollowText 
                                big={ true } 
                                flw={ isFollower ? isFollower : "" }
                            >
                                { isFollower ? "Following" : "Follow" }
                            </FollowText>
                        </Follow>
                }
            </SideDisplayView>

            

            <MainSpacer />
        </View>
    )
}

const styles = StyleSheet.create({
    profileAvatar: {
        position: "absolute",
        marginTop: 120,
        marginLeft: 21
    },
    buttonIcon: {
        padding: 7,
        borderRadius: 50,
        borderRadius: 50
    }
})
