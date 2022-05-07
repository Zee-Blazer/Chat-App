import React from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

export const SplitScreen = styled.View`
    display: flex;
    flex-direction: row;
    background-color: #dededd;
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

export const FinderSearch = styled(Searchbar)`
    border-radius: 25px;
    margin: 7px 24px;
`;

export const ClientChatBox = styled.View`
    display: flex;
    flex-direction: row;
    padding: 8px 12px;
    margin: 4px;
    background-color: #dededd;
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
    font-size: 20px;
    flex: 1;
`;

export const ClientChatTextDown = styled.Text`
    flex: 1;
    font-size: 12px;
`;
