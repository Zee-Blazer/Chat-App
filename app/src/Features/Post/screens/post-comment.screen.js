import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, FlatList } from 'react-native';

// Expo icon
import { Ionicons } from '@expo/vector-icons';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Safe area view
import { SafeAir } from "../../../Components/Utility/safe-area.component";

// API requests
import { getAllComments, makeComment } from "../../../Services/API's/Post.api";

// Styled components
import {
    CommentTitle,
    CommentInputCont,
    CommentInput,
} from "../components/PostViewHeader/post-view-header.styling";

// Comment section
import { MainComment } from "../components/main-comment.component";

export const PostCommentScreen = ({ route }) => {

    const [comments, setComments] = useState();
    const [commentMsg, setCommentMsg] = useState();
    const [userDetails, setUserDetails] = useState();

    useEffect(() => {
        getAllComments(route.params.id, setComments);
    }, [])

    useEffect(() => {

        async function fetchData() {
            setUserDetails(JSON.parse(await AsyncStorage.getItem(`@user_details`)));
        }
        fetchData()

    }, [])

    const sendComment = () => {
        makeComment(
            route.params.id,
            { username: userDetails && userDetails.username, user_id: userDetails._id, msg: commentMsg }
        )
        getAllComments(route.params.id, setComments);
        setCommentMsg();
    }

    return (
        <SafeAir>
            <CommentTitle>Comments ({comments ? comments.length : "0"})</CommentTitle>
{/* // Javascript */}
            <CommentInputCont>
                <CommentInput
                    multiline
                    placeholder="Write a message..."
                    onChangeText={setCommentMsg}
                />

                <TouchableOpacity onPress={ sendComment }>
                    <Ionicons
                        name="ios-send"
                        size={32} color="blue"
                        style={{ marginLeft: 16, marginTop: 8 }}
                    />
                </TouchableOpacity>
            </CommentInputCont>

            {comments &&
                <FlatList
                    data={comments}
                    renderItem={({ item }) => <MainComment data={item} />}
                    keyExtractor={item => item._id}
                />
            }

            {!comments && <Text>No comments</Text>}

        </SafeAir>
    )
}
