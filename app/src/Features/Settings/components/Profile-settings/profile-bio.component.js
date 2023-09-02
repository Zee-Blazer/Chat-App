import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Open Gallary
import * as ImagePicker from 'expo-image-picker';

// Api call
import { newPost } from '../../../../Services/API\'s/Post.api';

// Expo Icons
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// Styled
import { 
    BiosH1Tag, 
    SideSpacer, 
    LittleImage,
    ErrorMsg,
    BiosInput, 
    BiosInputContainer, 
} from '../profile-screen.style';

export const ProfileBios = () => {
    const [img, setImg] = useState();
    const [userId, setUserId] = useState();
    const [msg, setMsg] = useState();
    const [imageFileName, setImageFileName] = useState();
    const [filename, setFileName] = useState();
    const [errMsg, setErrMsg] = useState();

    const picker = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if(!result.cancelled){
            setImg(result.uri);
            setImageFileName(result.uri.split("file:/").join("").split('/').pop());
            setFileName(result.uri.split("file:/").join("").split('/').pop().split('.').pop());
        }
    }

    const sendPost = () => {
        if(img != undefined){
            
            const formData = new FormData();
            formData.append("File", {
                name: imageFileName,
                type: `image/${filename}`,
                uri: img
            });  
            formData.append("user_id", userId);
            if(msg != undefined || !msg){
                formData.append("msg", msg);
            }

            newPost(formData, { setErrMsg, setMsg, setImg });
        }
        else{
            setErrMsg("There's no image to post")
        }
    }

    useEffect(async () => {
        let user = await AsyncStorage.getItem("@user_id");
        setUserId(user);
    }, []);

    useEffect( () => {
        setTimeout( () => {
            setErrMsg();
        }, 10000 )
    }, [errMsg] )

    return (
        <SideSpacer>
            <BiosH1Tag>Bio</BiosH1Tag>

            { 
                errMsg ? 
                    <ErrorMsg>{errMsg}</ErrorMsg> 
                : 
                    null
            }

            { 
                img ? 
                    <LittleImage 
                        source={{ uri: img }} 
                    />
                : 
                    null
            }

            

            <BiosInputContainer>
                <Entypo 
                    name="image" 
                    size={28} 
                    color="purple" 
                    onPress={ picker }
                />
                <BiosInput 
                    placeholder="What's on your mind?"
                    placeholderTextColor="black"
                    onChangeText={ setMsg }
                />

                <TouchableOpacity>
                    <Ionicons 
                        name="add" 
                        size={28} 
                        color="green" 
                        style={{ alignSelf: 'flex-end' }} 
                        onPress={ sendPost }
                    />
                </TouchableOpacity>
                
            </BiosInputContainer>

            {/* <MediaCont>
                <PlusMediaCont color="#fc0303">
                    <PlusMediaLabel>Add Video</PlusMediaLabel>
                    <Feather name="play" size={24} color="lightblue" />
                </PlusMediaCont>
                <PlusMediaCont>
                    <PlusMediaLabel>Add Photo</PlusMediaLabel>
                    <AntDesign name="picture" size={24} color="lightblue" />
                </PlusMediaCont>
            </MediaCont> */}
            
        </SideSpacer>
    )
}
