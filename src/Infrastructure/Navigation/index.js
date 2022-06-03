import React, { useContext } from 'react';

// Navigation container for the navigation contents
import { NavigationContainer  } from '@react-navigation/native';
// navigation ref
import { navigationRef } from './root-navigation';

// Context
import { AuthContext } from '../../Services/Authentication/auth.context';

// Imported the Main Bottom tab navigator
import { MainNavigation } from './mainNavigation';

// Imported the Auth Navigator
import { AuthenticationRoute } from './Authentication';


// The main navigation container that contains the main navigation of the app
export const Navigation = () => {

    const { user, isAuthenticated } = useContext(AuthContext);

    return (
        <NavigationContainer ref={ navigationRef }>
            { isAuthenticated ? <MainNavigation /> : <AuthenticationRoute />  }
        </NavigationContainer>
    )
}
