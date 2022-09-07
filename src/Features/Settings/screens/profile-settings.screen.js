import React from 'react';
import { Text, ScrollView } from 'react-native';

// Safe Area
import { SafeAir } from '../../../Components/Utility/safe-area.component';

// Components
import { ProfileHeader } from '../components/profile-header.component';
import { CardStory } from '../../../Components/Posts/Card-story';
import { ProfileBios } from '../components/profile-bio.component';

// Styled Components
import { CoverImage } from '../components/profile-screen.style';

export const ProfileSettingsScreen = () => {

    return (
        <SafeAir>
            
            <ScrollView>
                
                {/* The profile header with all Images/profile pictures */}
                <ProfileHeader />

                {/* Profile Bios were you can check and update profile */}
                <ProfileBios />

                <CardStory />
                <CardStory />
                <CardStory />
            </ScrollView>

        </SafeAir>
    )
}