import React, { useState, useEffect } from 'react';
import { Text, Image } from 'react-native';

// Native Paper
import { ProgressBar, Colors } from 'react-native-paper';

// Navigation
import { useNavigation } from '@react-navigation/native';

// uriLink API for images
import { uriLink } from '../../../Services/Axios/axios-api';

// Safe area
import { SafeAir } from '../../../Components/Utility/safe-area.component';

// Icons
import { AntDesign } from '@expo/vector-icons';

// Styled Component { Post-View-Screen }
import {
    ProgressView,
    ThePost,
    PostCaptionBg,
    PostCaptionTxt,
    CommentZone
} from '../components/PostViewHeader/post-view-header.styling';


export const PostViewScreen = ({ route }) => {

    const navigation = useNavigation();

    const [progress, setProgress] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect( () => {
        if(route.params.type == "status"){
            setIsActive(true)
        }
    }, [] )

    useEffect( () => {
        let interval;

        if (isActive && progress <= 1) {
            interval = setInterval(() => {
            setProgress(progress + 0.1); // Decrease progress by 1% every second
            }, 1000);
        }

        if (progress >= 1) {
            setIsActive(false); // Stop the timer when progress reaches 0
            navigation.goBack();
        }

        return () => clearInterval(interval);

    }, [isActive, progress] )

    return (
        <SafeAir>

            { route.params.type == "post" ? 
                "" : 
                <ProgressView>
                    <ProgressBar
                        progress={progress}
                        color={Colors.green600}
                        animationType='spring'
                        useNativeDriver
                    />
                </ProgressView> 
            }

            <ThePost
                source={{ 
                    url: 
                    route.params.item.fileUrl ? 
                    uriLink + `${ route.params.type == "post" ? "post/image/" : "status/image/" }` + route.params.item.fileUrl : 
                    "https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg" 
                }}
            />

            <PostCaptionBg>
                <PostCaptionTxt>
                    { route.params.item.msg !== "undefined" && route.params.item.msg }
                </PostCaptionTxt>

                <CommentZone 
                    onPress={ () => {
                        if(route.params.type == "post"){
                            navigation.navigate(
                                "Sub", 
                                { 
                                    screen: "PostComment", 
                                    params: { user_id: route.params.item.user_id, id: route.params.item._id } 
                                }
                            )
                        }
                    } }
                >
                    <AntDesign name="up" size={24} color="rgba(0, 255, 40, 1)" style={{ marginLeft: 17 }} />
                    <Text style={{ color: "rgba(0, 255, 40, 1)" }}>Comment</Text>
                </CommentZone>


            </PostCaptionBg>
        </SafeAir>
    )
}