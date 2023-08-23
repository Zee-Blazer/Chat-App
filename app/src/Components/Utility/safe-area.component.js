import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, SafeAreaView } from 'react-native';

export const SafeAir = styled(SafeAreaView)`
    flex: 1;
    background-color: ${ props => props.theme.colors.dark.bg.primary };
    
`;
// ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
