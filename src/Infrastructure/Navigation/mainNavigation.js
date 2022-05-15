import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const MainStack = createStackNavigator();

// Tab Navigator
import { MainNavigator } from './main.navigator';

import { SubNavigation } from './Post-screenNavigator';
import { ChatNavigator } from './Chat-screenNavigator';
import { SettingsNavigator } from './Settings-screenNavigator';

// Exporting the Bottom Tab Navigator after compasing.... lol...
export const MainNavigation = () => {

    return (
        <MainStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <MainStack.Screen name="Main" component={ MainNavigator } headerMode="none" />
            
            <MainStack.Screen name="Sub" component={ SubNavigation } />
            <MainStack.Screen name="ChatSub" component={ ChatNavigator } />
            <MainStack.Screen name="SettingsSub" component={ SettingsNavigator } />

        </MainStack.Navigator>
    )
}
