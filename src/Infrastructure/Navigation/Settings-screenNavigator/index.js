import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { ProfileSettingsScreen } from '../../../Features/Settings/screens/profile-settings.screen';

const SettingsSub = createStackNavigator();

export const SettingsNavigator = () => {

    return (
        <SettingsSub.Navigator
            screenOptions={{
                headerShown: false
            }}
        >

            <SettingsSub.Screen name="profile" component={ ProfileSettingsScreen } />

        </SettingsSub.Navigator>
    )
}