import React from 'react';
import { Avatar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';

// Stack Navigator
import { createStackNavigator } from '@react-navigation/stack';

// Components for the Headers
import { HeaderLeft } from '../../../Components/HeaderLeft';
import { HeaderRight } from '../../../Components/HeaderRight';

const SubStack = createStackNavigator();

// Screens
import { PostViewScreen } from '../../../Features/Post/screens/post-view.screen';
import { PostCommentScreen } from '../../../Features/Post/screens/post-comment.screen';

export const SubNavigation = () => (
    <SubStack.Navigator
        screenOptions={{
            headerStyle: {
            backgroundColor: '#032254',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
      }}>
        <SubStack.Screen 
            name="PostView" 
            component={ PostViewScreen } 
            options={({ navigation, route }) => ({ 
                title: "My Home",
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
            options={ () => {
                title: "Comments"
            } }
        />
    </SubStack.Navigator>
)
