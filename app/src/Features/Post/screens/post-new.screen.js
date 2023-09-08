import React, { useState, useEffect } from 'react';

// React Native prebuilt components
import { StyleSheet, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

// SafeArea component
import { SafeAir } from "../../../Components/Utility/safe-area.component";

// Theme 
import { theme } from '../../../Infrastructure/Theme';

// Expo icons
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Api call
import { newPost, } from '../../../Services/API\'s/Post.api'; // Post API
import { postStory } from '../../../Services/API\'s/Story.api'; // Status API

// Styled components
import { 
    NewPostImage, 
    WriteCaptionCont,
    WriteCaption
} from "../components/PostViewHeader/post-view-header.styling";

export const PostNew = ({ route }) => {

    const navigation = useNavigation();

    const [userId, setUserId] = useState();
    const [img, setImg] = useState();
    const [msg, setMsg] = useState();
    const [errMsg, setErrMsg] = useState();

    const data = route.params;

    console.log(data.type);

    const sendPost = () => {
        if(data.img != undefined){
            
            const formData = new FormData();
            formData.append("File", {
                name: data.imageFileName,
                type: `image/${data.filename}`,
                uri: data.img
            });  
            formData.append("user_id", userId);
            if(msg != undefined || !msg){
                formData.append("msg", msg);
            }

            if(data.type == "post"){
                newPost(formData, { setErrMsg, setMsg, setImg });
                console.log("Posted on post Feed")
            }
            else{
                postStory(formData);
                console.log("Posted on Status")
            }
            navigation.navigate("Post")
        }
        else{
            setErrMsg("There's no image to post")
        }
    }

    useEffect(async () => {
        let user = await AsyncStorage.getItem("@user_id");
        setUserId(user);
    }, []);

    return <>
        <SafeAir>
            <TouchableOpacity onPress={ () => navigation.goBack() }>
                <MaterialIcons 
                    name="cancel" 
                    size={28} 
                    color="white" 
                    style={ styles.iconStyle } 
                />
            </TouchableOpacity>

            <NewPostImage 
                source={{ 
                    uri: route.params.img ? 
                        route.params.img : 
                        "https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg" 
                }}  
            />

            <WriteCaptionCont>
                <WriteCaption 
                    placeholder="Add caption..."
                    placeholderTextColor="white"
                    onChangeText={ setMsg }
                    value={msg}
                />
                <Feather 
                    name="send" 
                    size={24} 
                    color={ theme.colors.dark.icon.primary } 
                    onPress={ sendPost }
                />
            </WriteCaptionCont>
        </SafeAir>
    </>
}

const styles = StyleSheet.create({
    iconStyle: {
        alignSelf: 'flex-end',
        marginTop: 24,
        marginRight: 16
    }
})
