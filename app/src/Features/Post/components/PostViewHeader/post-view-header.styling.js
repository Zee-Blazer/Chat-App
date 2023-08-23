import React from 'react';
import styled from 'styled-components/native';

// Native Paper
import { ProgressBar, Colors } from 'react-native-paper';

export const FixedTopHeader = styled.View`
    display: flex;
    flex-direction: row;
`;

export const GroupEle = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const ProgressView = styled.View`
    width: 50%;
    margin: 0px auto;
`;

export const ThePost = styled.Image`
    height: 84%;
    margin: 12px;
`;

export const PostCaptionBg = styled.View`
    background-color: rgba(11, 11, 11, 0.56);
    padding: 8px;
`;

export const PostCaptionTxt = styled.Text`
    text-align: center;
    color: rgba(0, 5, 167, 1);
`;

export const CommentZone = styled.TouchableOpacity`
    margin: 0px auto;
    text-align: center;
    color: rgba(0, 183, 255, 1);
`;

// Comment screen styling

export const CommentTitle = styled.Text`
    font-size: 24px;
    margin: 12px 4px;
    margin-left: 21px;
    font-weight: 500;
`;

export const CommentInputCont = styled.View`
    flex-direction: row;
    margin: 12px 16px;
`;

export const CommentInput = styled.TextInput`
    border: 2px;
    padding: 12px 8px;
    width: 80%
`;

export const CommentBox = styled.View`
    background-color: blue;
    margin-top: 3px;
    margin-left: 12px;
    padding: 8px 12px;
    border-radius: 8px;
    padding-right: 46px;
    max-width: 320px;
`;

export const CommentUsername = styled.Text`
    font-size: 12px;
    color: yellow;
`;

export const MessageComment = styled.View`
    flex-direction: row;
    margin-top: 6px;
    max-width: 200px;
`;

export const CommentMsg = styled.Text`
    font-size: 16px;
    color: white;
`;

export const CommentTime = styled.Text`
    font-size: 10px;
    margin-left: 10px;
    margin-top: 8px;
    color: lightgreen;
`;
