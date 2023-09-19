import React from 'react';
import styled from 'styled-components/native';

// Native Paper
import { ProgressBar, Colors } from 'react-native-paper';
import { Platform } from 'react-native';

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
    color: white;
    font-size: ${ props => props.theme.fontSizes.xlg }
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
    color: ${ props => props.theme.colors.dark.text.primary };
`;

export const CommentInputCont = styled.View`
    flex-direction: row;
    margin: 12px 16px;
`;

export const CommentInput = styled.TextInput`
    border: 2px solid ${ props => props.theme.colors.dark.borders.secondary };;
    padding: 12px 8px;
    width: 80%;
    color: white
`;

export const CommentBox = styled.View`
    background-color: ${ props => props.theme.colors.dark.bg.primary };
    margin-top: 3px;
    margin-left: 12px;
    padding: 8px 12px;
    border-radius: 8px;
    padding-right: 46px;
    max-width: 320px;
    border: 1px solid ${ props => props.theme.colors.dark.borders.secondary };
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

export const NewPostImage = styled.Image`
    width: 97%;
    height: 78%;
    margin: 24px auto;
    border-radius: 6px;
`;

export const WriteCaption = styled.TextInput`
    width: 82%;
    padding: 10px 14px;
    background-color: ${ props => props.theme.colors.dark.bg.secondary };
    margin-left: 24px;
    border-radius: 8px;
    font-size: ${ props => props.theme.fontSizes.lg };
    font-weight: ${ props => props.theme.fontWeights.medium }
    color: ${ props => props.theme.colors.dark.text.primary };
`;

export const WriteCaptionCont = styled.View`
    position: absolute;
    top: ${ Platform.OS == "ios" ? props => props.factor ? "61%" : "96%" : "90%" };
    flex-direction: row;
    justify-content: space-between;
`;

export const BottomCamCont = styled.View`
    flex: 0.1;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 12px 2px;
    align-items: center;
`;

export const CapturePhoto = styled.TouchableOpacity`
    width: 68px;
    height: 68px;
    align-self: center;
    background-color: black;
    border-radius: 50
`;
