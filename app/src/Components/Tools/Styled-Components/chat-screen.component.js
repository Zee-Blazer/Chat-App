import React from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

export const SplitScreen = styled.View`
    display: flex;
    flex-direction: row;
    background-color: ${ props => props.theme.colors.dark.bg.primary };
    justify-content: space-evenly;
    border-top-width: 3px;
    border-top-color: ${ props => props.theme.colors.dark.borders.tertiary };
    border-bottom-width: 3px;
    border-bottom-color: ${ props => props.theme.colors.dark.borders.tertiary };
`;

export const SplitText = styled.Text`
    font-size: ${ props => props.theme.fontSizes.xlg };
    padding: 8px;
    color: ${ props => props.theme.colors.dark.text.primary };
`;

export const Line = styled.View`
    border: 3px solid black;
`;

export const FinderSearch = styled(Searchbar)`
    border-radius: 25px;
    margin: 7px 24px;
    background-color: ${ props => props.theme.colors.dark.bg.secondary };
`;

export const ResponseMsg = styled.Text`
    align-self: center;
    font-size: 18px;
    color: green;
`

export const ClientChatBox = styled.View`
    display: flex;
    flex-direction: row;
    padding: 8px 12px;
    margin: 4px;
    background-color: ${ props => props.theme.colors.dark.bg.secondary };
    justify-content: space-between;
`;

export const ClientMsg = styled.View`
    flex: 1;
    margin: 2px 7px;
    padding: 0px 14px;
`;

export const ClientMsgContainer = styled.View`
    display: flex;
    flex-direction: row;
    margin: 6px 4px;
`;

export const ClientChatTextFirst = styled.Text`
    font-size: 21px;
    flex: 1;
    color: ${ props => props.theme.colors.dark.text.primary };
`;

export const ClientChatTextDown = styled.Text`
    flex: 1;
    font-size: 12px;
    color: ${ props => props.theme.colors.dark.text.primary };
`;

export const ClientChatTextTime = styled.Text`
    color: ${ props => props.theme.colors.dark.text.primary };
    font-size: 12px;
`;

export const NewNotification = styled.View`
    width: 24px;
    height: 24px;
    border-radius: 50;
    margin-top: 10px;
    background-color: ${ props => props.theme.colors.dark.bg.plain };
`;

export const NotificationText = styled.Text`
    text-align: center;
    color: ${ props => props.theme.colors.dark.text.primary };
    margin-top: 1px;
    font-size: ${ props => props.theme.fontSizes.lg }
`;
