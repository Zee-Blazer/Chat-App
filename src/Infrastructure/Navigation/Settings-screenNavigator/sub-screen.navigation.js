import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { SecurityUpdateScreen } from '../../../Features/Settings/screens/security-update.screen';

const SettingsSub = createStackNavigator();

export const SubScreen = () => {

    return (
        <SettingsSub.Navigator
            screenOptions={{
                headerShown: false
            }}
        >

            {/* <SettingsSub.Screen name="profile" component={ ProfileSettingsScreen } /> */}
            <SettingsSub.Screen name="security" component={ SecurityUpdateScreen } />

        </SettingsSub.Navigator>
    )
}