import React, { useState } from 'react';

// React Native component
import { TouchableOpacity } from "react-native-gesture-handler";

// Navigation
import { useNavigation } from "@react-navigation/native";

// SafeAir
import { SafeAir } from "../../../Components/Utility/safe-area.component";

// Expo icons
import { Ionicons } from '@expo/vector-icons';

// Styled components
import { FollowingsHeader, FollowingsHeadTitle } from "../components/profile-screen.style";

// Components
import { ProfileTabBar } from "../components/Profile-settings/profile-tab-bar.component";
import { FollowingsDisplayer } from '../components/Followings/followings-displayer.component';

export const FollowingsScreen = () => {

    const navigation = useNavigation();

    const [tabDisplayer, setTabDisplayer] = useState("Followers")

    const navItems = [
        { text: "Followers" },
        { text: "Following" }
    ];

    const changeTab = (text) => setTabDisplayer(text);

    return <SafeAir>
        <FollowingsHeader>
            <TouchableOpacity onPress={ () => navigation.goBack() }>
                <Ionicons name="chevron-back-sharp" size={24} color="white" />
            </TouchableOpacity>
            <FollowingsHeadTitle>Mark Zukerburg</FollowingsHeadTitle>
        </FollowingsHeader>

        <ProfileTabBar changeTab={ changeTab } active={ tabDisplayer } navItems={ navItems } />

        <FollowingsDisplayer text={ tabDisplayer } />

    </SafeAir>
}
