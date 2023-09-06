import React, { useState, useEffect } from "react";

// React native default components
import { Dimensions, Text } from "react-native";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Expo icons
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// Images picker
import * as ImagePicker from 'expo-image-picker';

// Theme
import { theme } from "../../../Infrastructure/Theme";

// Styled components
import { 
    PostActionCont, 
    PostActionText, 
    PostActionBox 
} from "../../Tools/Styled-Components/post-card.component";
import { BackgroundCover } from "../../../Features/Settings/components/profile-screen.style";

// Screen Dimension height
const DimensionHeight = Dimensions.get("screen").height;
const DimensionWidth = Dimensions.get("screen").width;

export const PostAction = ({ changeDisplay, type }) => {

    const navigate = useNavigation();

    const [img, setImg] = useState();
    const [filename, setFileName] = useState();
    const [imageFileName, setImageFileName] = useState();
    const [pic, setPic] = useState();

    const picker = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [5, 4],
            quality: 1,
        });

        if(!result.cancelled){
            navigate.navigate("Sub", { screen: "PostNew", params: {
                img: result.uri,
                imageFileName: result.uri.split("file:/").join("").split('/').pop(),
                fileName: result.uri.split("file:/").join("").split('/').pop().split('.').pop(),
                type
            } })
        }
    }

    return <>
        <BackgroundCover height={ DimensionHeight } onPress={ changeDisplay }>

            <PostActionCont width="200px" widthHD={ DimensionWidth } heightHD={ DimensionHeight }>

                <PostActionBox onPress={ () => {
                    changeDisplay();
                    navigate.navigate("Sub", { screen: "CameraRoll", params: { type } })
                } }>
                    <Entypo name="camera" size={24} color={ theme.colors.dark.icon.primary } />
                    <PostActionText>Take Photo</PostActionText>
                </PostActionBox>

                <PostActionBox onPress={ () => {
                    picker();
                    changeDisplay();
                } }>
                    <FontAwesome name="image" size={24} color={ theme.colors.dark.icon.primary } />
                    <PostActionText>From Gallery</PostActionText>
                </PostActionBox>

            </PostActionCont>

        </BackgroundCover>
    </>
}
