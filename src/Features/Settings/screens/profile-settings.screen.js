import React from 'react';
import { Text } from 'react-native';

import { Avatar } from 'react-native-paper';

// Safe Area
import { SafeAir } from '../../../Components/Utility/safe-area.component';

// Styled Components
import { CoverImage } from '../components/profile-screen.style';

export const ProfileSettingsScreen = () => {

    return (
        <SafeAir>
            <CoverImage 
                source={{ uri: "https://cdn-images.zety.com/pages/best_font_for_cover_letter_6.jpg" }}
            />

            <Avatar.Image
                size={ 108 }
                source={{ uri: "https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg" }}
            />

            <Text> Profile Settings Screen </Text>
        </SafeAir>
    )
}