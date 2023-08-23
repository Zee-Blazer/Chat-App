import React from 'react';
import styled from 'styled-components/native';

export const ProfileSet = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    padding: 12px;
    margin: 8px 4px;
`;

export const DoubleCont = styled.TouchableOpacity`
    border-bottom-width: 2px;
    border-bottom-color: grey;
    margin: 2px 6px;
`;

export const Spread = styled.View`
    margin-left: 16px;
`;

export const BiggerTitle = styled.Text`
    font-size: 24px;
    margin: 9px 3px;
    color: ${ props => props.theme.colors.dark.text.primary };
`;

export const SmallerTitle = styled.Text`
    font-size: 14px;
    margin-bottom: 12px;
    color: ${ props => props.theme.colors.dark.text.blur };
`;

export const Logout = styled.Text`
    font-size: 18px;
    margin-left: 12px;
    color: red;
`;

export const ActioIconCont = styled.View`
    border-radius: 50;
    background-color: ${ props => props.theme.colors.dark.bg.primary };
    align-items: center;
    margin-left: ${ props => props.theme.space[5] }
    border: 1px solid ${ props => props.theme.colors.dark.borders.unique };
`;
