import React, { useState, useEffect } from 'react';

// React native paper Avatar
import { Avatar } from "react-native-paper";

// URI link
import { uriLink } from '../../../Services/Axios/axios-api';

// Profile picture API
import { getProfileImage } from '../../../Services/API\'s/Profile.api';

import {
    CommentInputCont,
    CommentBox,
    CommentUsername,
    CommentMsg,
    MessageComment,
    CommentTime
} from "./PostViewHeader/post-view-header.styling"

export const MainComment = ({ data }) => {

    const [profile, setProfile] = useState();

    useEffect(() => {
        getProfileImage(data.user_id, setProfile);
    }, [])

    return (
        <CommentInputCont>
            <Avatar.Image
                size={42}
                source={{ uri: `${profile ? uriLink + 'profile/pic/' + profile : ""}` }}
            />

            <CommentBox>
                <CommentUsername>{data.username}</CommentUsername>

                <MessageComment>
                    <CommentMsg>{data.msg}</CommentMsg>
                    <CommentTime>4:30PM</CommentTime>
                </MessageComment>
            </CommentBox>
        </CommentInputCont>
    )
}
