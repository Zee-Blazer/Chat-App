import React from 'react';
import { Avatar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';

// Stack Navigator
import { createStackNavigator } from '@react-navigation/stack';

// Icon
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

// Styled Ele
import { GroupEle } from '../../../Features/Post/components/PostViewHeader/post-view-header.styling';

const SubStack = createStackNavigator();

import { PostViewScreen } from '../../../Features/Post/screens/post-view.screen';

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

                    return (
                        <GroupEle onPress={ () => navigation.goBack() }>
                            <MaterialIcons 
                                name="arrow-back" 
                                size={28} 
                                color="white" 
                                style={{ marginTop: 5 }} 
                            />

                            <Avatar.Image 
                                size={42}
                                source={{ uri: "https://loveshayariimages.in/wp-content/uploads/2021/10/1080p-Latest-Whatsapp-Profile-Images-1.jpg" }}
                            />
                        </GroupEle>
                    )
                },
                headerRight: () => {

                    return (
                        <TouchableOpacity>
                            <Entypo 
                                name="dots-three-vertical" 
                                size={24} 
                                color="white" 
                                style={{ marginRight: 17 }}
                            />
                        </TouchableOpacity>
                    );
                }

            })}
        />
    </SubStack.Navigator>
)