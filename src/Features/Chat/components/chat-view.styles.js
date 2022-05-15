import React from 'react';
import styled from 'styled-components/native';

export const AccountBackground = styled.ImageBackground.attrs({
    source: require("../../../../assets/fb.jpg"),
})`
    flex: 1;
    background-color: #ddd;
`;

export const AccountCover = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
`;

export const ChatBox = styled.View`
    flex: 0.1;
    margin: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 4;
`;

export const MessagerNest = styled.View`
    flex: 1;
    min-height: 48px;
    max-height: 184px;
    background-color: white;
    padding: 9px 4px;
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 6px;
`;

export const SenderIcon = styled.TouchableOpacity`
    flex: 0.2;
    alignItems: center;
    justifyContent: center
`;

export const MessagerBox = styled.TextInput`
    flex: 1;
    padding: 4px;
`;

export const ChatDisplay = styled.View`
    flex: 0.9;
    display: flex;
    flex-direction: column;
`;

export const ChatLeftDisplay = styled.View`
    background-color: #195190FF;
    margin: 4px 14px;
    padding: 4px 8px;
    align-self: flex-start;
    border-radius: 9px;
    max-width: 240px;
`;

export const ChatRightDisplay = styled.View`
    background-color: whitesmoke;
    margin: 4px 14px;
    padding: 4px 8px;
    align-self: flex-end;
    border-radius: 9px;
    z-index: 1;
    max-width: 240px;
`;

export const LeftAngle = styled.View`
    background-color: #195190FF;
    width: 21px;
    height: 21px;
    margin-left: -15px;
    border-bottom-right-radius: 21px;
`;

export const RightAngle = styled.View`
    background-color: whitesmoke;
    width: 21px;
    height: 21px;
    margin-right: -15px;
    border-bottom-right-radius: 21px;
    align-self: flex-end;
`;

export const ChatOwner = styled.Text`
    font-size: 16px;
    border-bottom-width: 1px;
    color: white;
`;

export const Chat = styled.Text`
    color: white
`;

export const Time = styled.Text`
    color: #ED254EFF;
    margin-top: -5px;
`;
