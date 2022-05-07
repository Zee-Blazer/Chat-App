import React from 'react';
import styled from 'styled-components/native';

export const StoryCard = styled.View`
    background-color: #dededd;
    margin: 8px 6px;
    border-radius: 4px;
`;

export const ImgStry = styled.Image`
    margin: 4px;
    height: 240px;
`;

export const GridDisplay = styled.View`
    display: flex;
    flex-direction: row;
    padding: 12px;
`;

export const FlexDisplay = styled.View`
    display: flex;
    flex-direction: row;
    padding: 12px;
    justify-content: space-evenly;
`;

export const SplitText = styled.Text`
    font-size: 21px;
    padding: 8px;
    color: blue;
`;

export const Line = styled.View`
    border: 2px solid grey;
`;
