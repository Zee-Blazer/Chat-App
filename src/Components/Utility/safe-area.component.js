import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, SafeAreaView } from 'react-native';

export const SafeAir = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;