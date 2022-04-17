import React from 'react';

// Styles
import styled from 'styled-components/native';

export const Box = styled.View`
    background-color: #dedede;
    width: 100%;
    padding: 2px 6px;
    margin: 6px 0px;
`;

export const Scroller  = styled.ScrollView`
    padding: 6px;
`;

export const ProfilePost = styled.View`
    padding: 2px 8px;
    margin: 2px 4px; 
`;

export const RoundedBorder = styled.View`
    border: 3px solid lightblue;
    padding: 4px;
    border-radius: 50;
    min-width: 64px;
    max-width: 78px;
`;

export const ProfileLabel = styled.Text`
    color: blue;
    text-align: center;
    font-weight: 400;
    margin-top: 4px;
`;
