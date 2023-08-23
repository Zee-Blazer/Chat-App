import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { ProfileSettingsScreen } from '../../../Features/Settings/screens/profile-settings.screen';
import { SecurityUpdateScreen } from '../../../Features/Settings/screens/security-update.screen';
import { StorySettingsScreen } from '../../../Features/Settings/screens/story-settings.screen';

const SettingsSub = createStackNavigator();

export const SettingsNavigator = () => {

    return (
        <SettingsSub.Navigator
            screenOptions={{
                headerShown: false
            }}
        >

            <SettingsSub.Screen name="Profile" component={ProfileSettingsScreen} />
            <SettingsSub.Screen name="Security" component={SecurityUpdateScreen} />
            <SettingsSub.Screen name="Story" component={StorySettingsScreen} />

        </SettingsSub.Navigator>
    )
}