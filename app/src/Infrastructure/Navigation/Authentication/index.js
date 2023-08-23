import React from 'react';

// Imported stack navigator.
import { createStackNavigator } from '@react-navigation/stack';

// Instance of the stack navigator.
const AuthStack = createStackNavigator();

// Screens
import { LoginScreen } from '../../../Features/Auth/screens/login.screen';
import { SignupScreen } from '../../../Features/Auth/screens/signup.screen';

export const AuthenticationRoute = () => {

    return (
        <AuthStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <AuthStack.Screen name="Login" component={ LoginScreen } />
            <AuthStack.Screen name="SignUp" component={ SignupScreen } />
        </AuthStack.Navigator>
    )
}
