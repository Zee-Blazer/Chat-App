import React from 'react';
import { Text } from 'react-native-paper';

// Bottom Tab Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Icon
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

// Screens imported
import { PostScreen } from '../../Features/Post';
import { ChatScreen } from '../../Features/Chat';
import { SettingsScreen } from '../../Features/Settings';

// Instance of the Bottom Tab Navigator
const MainTab = createBottomTabNavigator();


// Exporting the Bottom Tab Navigator after compasing.... lol...
export const MainNavigation = () => {

    return (
        <MainTab.Navigator
            initialRouteName="Post"
            screenOptions={{
                tabBarActiveTintColor: '#fc26a6',
                headerShown: false
            }}
        >

            <MainTab.Screen 
                name="Post" 
                component={ PostScreen } 
                options={{
                    tabBarLabel: 'Post',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="postage-stamp" size={ size } color={ color } />
                    ),
                }}
            />

            <MainTab.Screen 
                name="Chat" 
                component={ ChatScreen } 
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="md-chatbox-ellipses-outline" size={ size } color={ color } />
                    ),
                }}
            />

            <MainTab.Screen 
                name="Settings" 
                component={ SettingsScreen } 
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="settings" size={ size } color={ color } />
                    ),
                }}
            />

        </MainTab.Navigator>
    )
}
