import React from 'react';
import { Avatar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';

import { TransitionPresets } from '@react-navigation/stack';
import { HeaderStyleInterpolators } from '@react-navigation/stack';

// Stack Navigator
import { createStackNavigator } from '@react-navigation/stack';

// Components for the Headers
import { HeaderLeft } from '../../../Components/HeaderLeft';
import { HeaderRight } from '../../../Components/HeaderRight';

const SubStack = createStackNavigator();

// Screens
import { PostViewScreen } from '../../../Features/Post/screens/post-view.screen';
import { PostCommentScreen } from '../../../Features/Post/screens/post-comment.screen';
import { PostNew } from '../../../Features/Post/screens/post-new.screen';
import { CameraRoll } from '../../../Features/Post/screens/camera-roll.screen';

export const SubNavigation = () => (
    <SubStack.Navigator
        screenOptions={{
            headerShown: false,
            headerStyle: {
            backgroundColor: '#032254',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
            gestureEnabled: true,
            ...TransitionPresets.FadeFromBottomAndroid,
      }}>
        <SubStack.Screen 
            name="PostView" 
            component={ PostViewScreen } 
            options={({ navigation, route }) => ({ 
                title: route.params.username,
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#15181B',
                },
                headerLeft: () => {
                    return <HeaderLeft navigation={ navigation } route={ route } />
                },
                headerRight: () => {
                    return <HeaderRight />
                }

            })}
        />
        <SubStack.Screen 
            name="PostComment"
            component={ PostCommentScreen }
        />
        <SubStack.Screen 
            name="PostNew"
            component={ PostNew }
            options={({ route }) => ({})}
            headerShown={false}
        />
        <SubStack.Screen 
            name="CameraRoll"
            component={ CameraRoll }
            options={({ route }) => ({})}
        />
    </SubStack.Navigator>
)
