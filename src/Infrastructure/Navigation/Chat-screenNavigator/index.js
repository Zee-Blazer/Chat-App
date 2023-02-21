import React from 'react';

// Stack Navigator
import { createStackNavigator } from '@react-navigation/stack';

// Chat View Screen
import { ChatViewScreen } from '../../../Features/Chat/screens/chat-view.screen';

// Header component
import { HeaderLeft } from '../../../Components/HeaderLeft';
import { HeaderRight } from '../../../Components/HeaderRight';

const ChatStack = createStackNavigator();

export const ChatNavigator = () => {

    return (
        <ChatStack.Navigator 
            screenOptions={{
                headerStyle: {
                backgroundColor: '#032254',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                },
        }}>

            <ChatStack.Screen 
                name="ChatView" 
                component={ ChatViewScreen } 
                options={ ({ navigation, route }) => ({
                    title: route.params.username,
                    headerLeft: () => {

                        return <HeaderLeft navigation={ navigation } route={ route } />
                    },
                    headerRight: () => {

                        return <HeaderRight navigation={ navigation } route={ route } />
                    }
                }) }
            />

        </ChatStack.Navigator>
    )
};
