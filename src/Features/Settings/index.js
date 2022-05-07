import React from 'react';
import { Text } from 'react-native';

// Expo Icon
import { AntDesign } from '@expo/vector-icons'; 

// Safe Area View
import { SafeAir } from '../../Components/Utility/safe-area.component';

// Settings styled components
import { 
    DoubleCont,
    Spread,
    BiggerTitle,
    SmallerTitle,
    ProfileSet,
    Logout
} from '../../Components/Tools/Styled-Components/settings-screen.component';

// Needed components
import { ProfileSettings } from './components/profile-settings.component';

export const SettingsScreen = () => {
    return (
        <SafeAir>
            <DoubleCont>
                <ProfileSettings />
            </DoubleCont>

            <DoubleCont>
                <Spread>
                    <BiggerTitle>Security</BiggerTitle>
                    <SmallerTitle>Password/Email</SmallerTitle>
                </Spread>
            </DoubleCont>

            <DoubleCont>
                <Spread>
                    <BiggerTitle>Story</BiggerTitle>
                    <SmallerTitle>Videos/Photos</SmallerTitle>
                </Spread>
            </DoubleCont>

            <DoubleCont>
                <ProfileSet>
                    <AntDesign name="logout" size={24} color="red" />
                    <Logout>Logout</Logout>
                </ProfileSet>
            </DoubleCont>
        </SafeAir>
    )
}