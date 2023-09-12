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

export const LittleImage = styled.Image`
    width: 50px;
    height: 50px;
    margin-left: 12px;
`

export const SideDisplayView = styled.View`
    flex-direction: row;
    align-self: flex-end;
    margin: 0px 28px;
    margin-top: -12px
`;

export const EditProfileImage = styled.Text`
    margin: 214px 34px;
    position: absolute;
    background-color: blue;
    padding: 2px 9px;
    color: white;
    border-radius: 4px;
`;

export const SecurityTitle = styled.Text`
    font-size: 28px;
    font-weight: 600;
    margin: 36px 4px;
    text-align: center;
    color: ${ props => props.theme.colors.dark.text.primary }
`;

export const InputBox = styled.View`
    margin: 16px 24px;
    color: ${ props => props.theme.colors.dark.text.primary }
`;

export const InputLabel = styled.Text`
    font-size: 21px;
    color: ${ props => props.theme.colors.dark.text.primary };
    font-weight: 400;
`;

export const MainInput = styled.TextInput.attrs({
    placeholderTextColor: `${ props => props.theme.colors.dark.text.primary }`
  })`
    margin-top: 12px;
    padding: 12px;
    color: black;
    font-size: 16px;
    height: 40px;
    color: ${ props => props.theme.colors.dark.text.primary };
    border: 1px;
    border-color: ${ props => props.theme.colors.dark.text.primary };
    border-radius: 3px;
`;

export const DeleteAccountText = styled.Text`
    position: absolute;
    font-size: 16px;
    text-align: center;
    color: red;
    left: 37%;
    top: 100%;
`;

export const StoriesHeaderText = styled.Text`
    font-size: 24px;
    font-weight: 500;
    margin: 10px 24px;
    margin-top: 18px;
`;

export const ResettedPassword = styled.Text`
    font-size: 18px;
    color: green;
    text-align: center;
    margin: 12px;
`;

export const BtnUpdateCont = styled.View`
    margin: 34px 24px;
`;

export const UpdateBtn = styled.Button`
    width: 40px;
    margin: 12px 38px;
`;

export const MainSpacer = styled.View`
    margin-top: 18px;
`;

export const BiosH1Tag = styled.Text`
    font-size: 18px;
    font-weight: 400;
    margin: 6px 14px;
    margin-top: 21px;
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

export const ErrorMsg = styled.Text`
    text-align: center;
    font-size: 16px;
    color: red;
`;

export const imgUrl = styled.Text`
    text-align: center;
    font-size: 16px;
    color: blue;
`

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

// Version 1.2.0 new styling

export const ProfileDetailsCont = styled.View`
    margin: ${ props => props.theme.space[6] } ${ props => props.theme.space[5] };
`;

export const ProfileUsername = styled.Text`
    font-size: ${ props => props.theme.fontSizes.caption };
    color: ${ props => props.theme.colors.dark.text.primary };
    font-weight: ${ props => props.theme.fontWeights.bold };
    margin-bottom: 1px;
`;

export const ProfileBio = styled.Text`
    font-size: ${ props => props.theme.fontSizes.lg };
    color: ${ props => props.theme.colors.dark.text.primary };
    font-weight: ${ props => props.theme.fontWeights.bold };
`;

export const ProfileEmail = styled.Text`
    font-size: ${ props => props.theme.fontSizes.medium };
    color: ${ props => props.theme.colors.dark.text.blur };
    margin-bottom: ${ props => props.theme.space[4] };
`;

export const FollowersLabel = styled.Text`
    font-size: ${ props => props.theme.fontSizes.sm };
    color: ${ props => props.theme.colors.dark.text.blur };
`;

export const FollowBox = styled.View`
    margin-top: ${ props => props.theme.space[3] };
    display: flex;
    margin-bottom: ${ props => props.theme.space[3] };
`;

export const WhiteLabel = styled.Text`
    color: ${ props => props.theme.colors.dark.text.primary };
`;

export const TabBar = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: ${ props => props.theme.colors.dark.borders.unique };
    margin-bottom: ${ props => props.theme.space[5] };
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const TabBarItem = styled.View`
    padding: ${ props => props.theme.space[3] } ${ props => props.theme.space[5] };
    border-bottom-width: 3px;
    border-bottom-color: ${ props => props.active ? props.theme.colors.dark.borders.primary : "" };
`;

export const TabBarText = styled.Text`
    font-size: ${ props => props.theme.fontSizes.medium };
    font-weight: ${ props => props.theme.fontWeights.bold };
    color: ${ props => props.theme.colors.dark.text.primary };
    text-align: center;
`;

export const ProfileAboutCont = styled.View`
    background-color: ${ props => props.theme.colors.dark.bg.secondary };
    margin-top: ${ props => props.theme.space[3] };
`;

export const ProfileAboutInputBox = styled.View`
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-top-color: ${ props => props.theme.colors.dark.borders.secondary };
    border-bottom-color: ${ props => props.theme.colors.dark.borders.secondary };
    padding: ${ props => props.theme.space[5] };
    flex-direction: row;
`;

export const ProfileAboutInput = styled.TextInput`
    flex: 1;
    color: ${ props => props.theme.colors.dark.text.secondary };
    font-weight: ${ props => props.theme.fontWeights.medium };
    font-size: ${ props => props.theme.fontSizes.lg };
    padding-right: ${ props => props.theme.space[3] };
`;

export const ProfileAboutLabel = styled.Text`
    font-size: ${ props => props.theme.fontSizes.lg };
    color: ${ props => props.theme.colors.dark.text.primary };
    margin-left: ${ props => props.theme.space[3] };
    width: 100px;
`;

export const ProfileAboutButton = styled.TouchableOpacity`
    background-color: ${ props => props.theme.colors.dark.bg.secondary };
    border: 2px solid ${ props => props.theme.colors.dark.borders.secondary };
    margin: 2px auto;
    margin-top: ${ props => props.theme.space[7] };
    width: 100px;
    padding: ${ props => props.theme.space[3] };
    border-radius: 7px;
`;

export const ProfileAboutBtnLabel = styled.Text`
    font-size: ${ props => props.theme.fontSizes.lg };
    color: ${ props => props.theme.colors.dark.text.secondary };
    font-weight: ${ props => props.theme.fontWeights.medium };
    text-align: center;
`;

export const FollowingsHeader = styled.View`
    background-color: ${ props => props.theme.colors.dark.bg.secondary };
    padding: ${ props => props.theme.space[5] };
    flex-direction: row;
    margin-bottom: ${ props => props.theme.space[5] };
`;

export const FollowingsHeadTitle = styled.Text`
    font-size: ${ props => props.theme.fontSizes.caption };
    font-weight: ${ props => props.theme.fontWeights.bold };
    color: ${ props => props.theme.colors.dark.text.primary };
    margin-left: ${ props => props.theme.space[6] };
`;

export const Follow = styled.TouchableOpacity`
    background-color: ${ props => props.flw ? props.theme.colors.dark.bg.common : props.theme.colors.dark.bg.plain };
    padding: ${ props => props.theme.space[3] } ${ props => props.theme.space[5] };;
    border-radius: 16px;
    margin-left: 12px;
`;

export const FollowText = styled.Text`
    font-size: ${ props => props.theme.fontSizes.medium };
    color: ${ props => props.flw ? props.theme.colors.dark.text.plain : props.theme.colors.dark.text.primary };
    text-align: center
`;

export const PersonsDetail = styled.Text`
    font-size: ${ props => props.theme.fontSizes.medium };
    font-weight: ${ props => props.theme.fontWeights.bold };
    color: ${ props => props.theme.colors.dark.text.primary };
`;

export const BackgroundCover = styled.TouchableOpacity`
    background-color: rgba(0, 0, 0, 0.8)
    width: 100%;
    height: ${ props => props.height };
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
`;

export const ProfileImageDisplay = styled.Image`
    width: 90%;
    height: ${ props => props.height/1.67 };
    margin: 12px auto;
    margin-top: 14%;
`;
