import React from 'react';

// Bottom Tab Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Icon
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

// Theme defined styled component
import { theme } from '../Theme/index';

// Screens imported
import { PostScreen } from '../../Features/Post';
import { ChatScreen } from '../../Features/Chat';
import { NotificationScreen } from '../../Features/Notifications';
import { SettingsScreen } from '../../Features/Settings';

// Instance of the Bottom Tab Navigator
const MainTab = createBottomTabNavigator();

export const MainNavigator = () => {

    return (
        <MainTab.Navigator
            initialRouteName="Post"
            screenOptions={{
                tabBarActiveTintColor: theme.colors.dark.bg.common,
                tabBarStyle: { backgroundColor: theme.colors.dark.bg.primary },
                headerShown: false
            }}
            tabBarOptions={{ 
                inactiveTintColor: theme.colors.dark.bg.plain
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
                name="Notification" 
                component={ NotificationScreen } 
                options={{
                    tabBarLabel: 'Notifications',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="notifications" size={ size } color={ color } />
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