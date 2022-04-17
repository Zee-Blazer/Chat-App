import React from 'react';

// Navigation container for the navigation contents
import { NavigationContainer } from '@react-navigation/native';

// Imported the Main Bottom tab navigator
import { MainNavigation } from './mainNavigation';


// The main navigation container that contains the main navigation of the app
export const Navigation = () => {

    return (
        <NavigationContainer>
            <MainNavigation />
        </NavigationContainer>
    )
}
