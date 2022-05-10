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
