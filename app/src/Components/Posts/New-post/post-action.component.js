import React, { useState } from "react";

// React native default components
import { Dimensions } from "react-native";

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

export const PostAction = ({ changeDisplay }) => {

    const navigate = useNavigation();

    const [pic, setPic] = useState();

    const selectFile = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            })

            if (!result.canceled) {
                const source = { uri: result.uri };
                const response = await fetch(source.uri);
                const blob = await response.blob();
                if(id, user_id){
                    pic(source, blob, [id, user_id].sort());
                }
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    return <>
        <BackgroundCover height={ DimensionHeight } onPress={ changeDisplay }>

            <PostActionCont width="200px" widthHD={ DimensionWidth } heightHD={ DimensionHeight }>

                <PostActionBox onPress={ () => {
                    changeDisplay();
                    navigate.navigate("Sub", { screen: "CameraRoll" })
                } }>
                    <Entypo name="camera" size={24} color={ theme.colors.dark.icon.primary } />
                    <PostActionText>Take Photo</PostActionText>
                </PostActionBox>

                <PostActionBox onPress={ () => {
                    selectFile()
                    changeDisplay();
                } }>
                    <FontAwesome name="image" size={24} color={ theme.colors.dark.icon.primary } />
                    <PostActionText>From Gallery</PostActionText>
                </PostActionBox>

            </PostActionCont>

        </BackgroundCover>
    </>
}
