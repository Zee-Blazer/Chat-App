import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Authentication Context
import { AuthContext } from '../../Services/Authentication/auth.context';

// Expo Icon
import { AntDesign } from '@expo/vector-icons';

// Root Navigation
import * as RootNavigation from '../../Infrastructure/Navigation/root-navigation';

// Navigation
import { useNavigation } from '@react-navigation/native';

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

    const navigation = useNavigation();

    const { LogOut } = useContext(AuthContext);

    return (
        <SafeAir>
        
            <DoubleCont>
                <ProfileSettings />
            </DoubleCont>

            <DoubleCont>
                <TouchableOpacity onPress={() => { navigation.navigate("SettingsSub", { screen: "Security" }) }}>
                    <Spread>
                        <BiggerTitle>Security</BiggerTitle>
                        <SmallerTitle>Password/Email</SmallerTitle>
                    </Spread>
                </TouchableOpacity>
            </DoubleCont>

            <DoubleCont>
                <TouchableOpacity onPress={() => { navigation.navigate("SettingsSub", { screen: "Story" }) }}>
                    <Spread>
                        <BiggerTitle>Story</BiggerTitle>
                        <SmallerTitle>Videos/Photos</SmallerTitle>
                    </Spread>
                </TouchableOpacity>
            </DoubleCont>

            <DoubleCont>
                <ProfileSet>
                    <AntDesign name="logout" size={24} color="red" />
                    <Logout onPress={() => LogOut()}>Logout</Logout>
                </ProfileSet>
            </DoubleCont>

        </SafeAir>
    )
}