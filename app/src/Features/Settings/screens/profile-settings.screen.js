import React, { useState, useEffect } from 'react';
import { Text, ScrollView, FlatList } from 'react-native';

// Safe Area
import { SafeAir } from '../../../Components/Utility/safe-area.component';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Post API call
import { specificUserPost } from '../../../Services/API\'s/Post.api';

// Components
import { ProfileHeader } from '../components/profile-header.component';
import { CardStory } from '../../../Components/Posts/Card-story';
import { ProfileBios } from '../components/profile-bio.component';
import { ProfileAbout } from '../components/profile-about.component';
import { ProfileTabBar } from '../components/profile-tab-bar.component';

// Styled Components
import { CoverImage } from '../components/profile-screen.style';

export const ProfileSettingsScreen = () => {
    const [user_id, setUser_id] = useState();
    const [data, setData] = useState();

    useEffect(async () => {
        setUser_id(await AsyncStorage.getItem(`@user_id`));
    }, [])

    useEffect( () => {
        specificUserPost(user_id, setData);
    }, [user_id] );

    return (
        <SafeAir>
            
            <ScrollView>

                {/* The profile header with all Images/profile pictures */}
                <ProfileHeader />

                {/* Information about the current profile... It's following and bios  */}
                <ProfileAbout />

                {/* The Profile TabBar for smooth navigation in the profiles screen  */}
                <ProfileTabBar />

                {/* Profile Bios were you can check and update profile */}
                {/* <ProfileBios /> */}

                {/* A List of all personal posts */}
                { data ? <FlatList 
                    data={data}
                    renderItem={ ({ item }) => (
                        <CardStory item={ item } />
                    ) }
                    keyExtractor={ item => item._id }
                /> : <Text>loading...</Text>}

            </ScrollView>

        </SafeAir>
    )
}