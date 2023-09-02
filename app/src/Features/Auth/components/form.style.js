import React from 'react';
import styled from 'styled-components/native';

import { Button } from 'react-native-paper';

export const AccountBackgroundForm = styled.ImageBackground.attrs({
    source: require("../../../../assets/bg-chat.png"),
})`
    flex: 1;
    background-color: #ddd;
    padding-top: 58px;
`;

export const Logo = styled.Image`
    height: 84px;
    width: 100px;
`;

export const HeaderLogo = styled.View`
    margin: 54px 42px;
    display: flex;
    flex-direction: row;
`;

export const LogoTxt = styled.Text`
    font-size: 42px;
    align-self: center;
    font-weight: 400;
    color: white;
    margin: 2px 6px;
`;

export const IconInputContainer = styled.View`
    display: flex;
    flex-direction: row;
    border-bottom-width: 4px;
    border-color: white;
    margin: 18px 24px;
    padding: 4px 12px;
    border-radius: 14px;
`;

export const UserInfoInput = styled.TextInput.attrs({
    placeholderTextColor: "white"
  })`
    color: white;
    width: 250px;
    font-weight: 600;
    font-size: 18px;
    margin: 0px 4px;
    padding: 1px 6px;
`;

export const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin: 21px 24px;
  justify-content: space-around;
`;

export const ButtonElementAction = styled(Button)`
`;

export const ErrorMsg = styled.Text`
  color: red;
  text-align: center;
  font-size: 18px
`;
