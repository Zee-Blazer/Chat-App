import React from 'react';
import styled from 'styled-components/native';

export const ProfileSet = styled.View`
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
`;

export const SmallerTitle = styled.Text`
    font-size: 14px;
    margin-bottom: 12px;
`;

export const Logout = styled.Text`
    font-size: 18px;
    margin-left: 12px;
    color: red;
`;
