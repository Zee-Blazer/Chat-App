import React, { useState, useEffect } from 'react';
import { Text, Image } from 'react-native';

// Native Paper
import { ProgressBar, Colors } from 'react-native-paper';

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

    // console.log(route.params);

    return (
        <SafeAir>

            <ProgressView>
                <ProgressBar
                    progress={0.5}
                    color={Colors.green600}
                />
            </ProgressView>

            <ThePost
                source={{ url: "https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg" }}
            />

            <PostCaptionBg>
                <PostCaptionTxt>Talking about the post and myself</PostCaptionTxt>

                <CommentZone >
                    <AntDesign name="up" size={24} color="rgba(0, 255, 40, 1)" style={{ marginLeft: 17 }} />
                    <Text style={{ color: "rgba(0, 255, 40, 1)" }}>Comment</Text>
                </CommentZone>


            </PostCaptionBg>
        </SafeAir>
    )
}