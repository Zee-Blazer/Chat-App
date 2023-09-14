import React, { useState } from 'react';

// React Native component
import { TouchableOpacity } from "react-native-gesture-handler";

// Navigation
import { useNavigation } from "@react-navigation/native";

// SafeAir
import { SafeAir } from "../../../Components/Utility/safe-area.component";

// Expo icons
import { Ionicons } from '@expo/vector-icons';

// Context Provider
import { FollowContextProvider } from '../../../Services/Follow/follow.context';

// Styled components
import { FollowingsHeader, FollowingsHeadTitle } from "../components/profile-screen.style";

// Components
import { ProfileTabBar } from "../components/Profile-settings/profile-tab-bar.component";
import { FollowingsDisplayer } from '../components/Followings/followings-displayer.component';

export const FollowingsScreen = ({ route }) => {

    const navigation = useNavigation();

    const type = route.params.type;
    const item = route.params.item

    const [tabDisplayer, setTabDisplayer] = useState("Followers")

    const navItems = [
        { text: "Followers" },
        { text: "Following" }
    ];

    const changeTab = (text) => setTabDisplayer(text);

    return <SafeAir>
        
        <FollowContextProvider>
            <FollowingsHeader>
                <TouchableOpacity onPress={ () => navigation.goBack() }>
                    <Ionicons name="chevron-back-sharp" size={24} color="white" />
                </TouchableOpacity>
                <FollowingsHeadTitle>
                    { item.username.toUpperCase() }
                </FollowingsHeadTitle>
            </FollowingsHeader>

            <ProfileTabBar changeTab={ changeTab } active={ tabDisplayer } navItems={ navItems } />

            <FollowingsDisplayer text={ tabDisplayer } type={ type } item={ item } />
        </FollowContextProvider>

    </SafeAir>
}
