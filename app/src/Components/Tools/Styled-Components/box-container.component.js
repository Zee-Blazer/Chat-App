import React from 'react';

// Styles
import styled from 'styled-components/native';

export const Box = styled.View`
    background-color: ${ props => props.theme.colors.dark.bg.secondary };
    width: 100%;
    padding: 2px 6px;
    margin: 6px 0px;
`;

export const Scroller  = styled.ScrollView`
    padding: 6px;
`;

export const ProfilePost = styled.View`
    padding: 0px 8px;
    margin: 2px 4px; 
`;

export const RoundedBorder = styled.View`
    border: 2px solid ${ props => props.theme.colors.dark.borders.primary };
    padding: 4px;
    border-radius: 50;
    min-width: 64px;
    max-width: 78px;
`;

export const ProfileLabel = styled.Text`
    color: ${ props => props.theme.colors.dark.text.primary };
    text-align: center;
    font-size: ${ props => props.theme.fontSizes.medium };
    font-weight: ${ props => props.theme.fontWeights.regular };
    margin-top: 4px;
`;

// Version 1.2.0 styling

export const NewPostBox = styled.View`
    background-color: ${ props => props.theme.colors.dark.bg.secondary };
    width: 100%;
    padding: 8px 14px;
    margin: 6px 0px;
    flex-direction: row;
    justify-content: space-around;
`;

export const NewPostInput = styled.TextInput`
    color: ${ props => props.theme.colors.dark.text.primary };
    font-size: ${ props => props.theme.fontSizes.lg };
    flex: 1;
    margin-top: 6px;
`;
