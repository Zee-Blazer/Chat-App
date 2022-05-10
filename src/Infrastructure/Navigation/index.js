import React from 'react';

// Navigation container for the navigation contents
import { NavigationContainer  } from '@react-navigation/native';
// navigation ref
import { navigationRef } from './root-navigation';

// Imported the Main Bottom tab navigator
import { MainNavigation } from './mainNavigation';


// The main navigation container that contains the main navigation of the app
export const Navigation = () => {

    return (
        <NavigationContainer ref={ navigationRef }>
            <MainNavigation />
        </NavigationContainer>
    )
}
