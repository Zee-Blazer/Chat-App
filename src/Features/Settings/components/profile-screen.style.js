import React from 'react';
import styled from 'styled-components/native';

// React native paper
import { Avatar } from 'react-native-paper';

export const CoverImage = styled.Image`
    width: 100%;
    height: 180px;
    shadow-color: #171717;
    shadow-offset: {width: -2, height: 4};
    shadow-opacity: 0.2;
    shadow-radius: 3;
`;

export const SideDisplayView = styled.View`
    flex-direction: row;
    align-self: flex-end;
    margin: 0px 28px;
    margin-top: -12px
`;

export const MainSpacer = styled.View`
    margin-top: 18px;
`;

export const BiosH1Tag = styled.Text`
    font-size: 18px;
    font-weight: 400;
    margin-left: 14px
`;

export const SideSpacer = styled.View`
    margin: 4px 12px;
`;

export const BiosInputContainer = styled.View`
    flex-direction: row;
    margin-top: 7px;
    margin-bottom: 18px;
    border: 1px solid grey;
    border-radius: 12px;
    padding: 6px 12px;
`;

export const BiosInput = styled.TextInput`
    margin: 1px 8px;
    width: 80%
`;

export const MediaCont = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    margin: 12px 2px;
`;

export const PlusMediaCont = styled.View`
    flex-direction: row;
    background-color: ${props => props.color || 'blue'};
    padding: 12px;
    border-radius: 7px
`;

export const PlusMediaLabel = styled.Text`
    color: white;
    border-right-width: 1px;
    border-right-color: white;
    padding: 7px;
    margin-right: 10px;
`;
