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
import { TweeetPost } from '../../../Components/Posts/Card-story/tweet-post.component';
import { ProfileBios } from '../components/Profile-settings/profile-bio.component';

// Styled Components
import { StoriesHeaderText } from '../components/profile-screen.style';

export const StorySettingsScreen = () => {
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
            <StoriesHeaderText style={{ color: 'white' }}>Your Stories</StoriesHeaderText>
            
            {/* The profile header with all Images/profile pictures */}
            {/* <ProfileHeader /> */}

            {/* Profile Bios were you can check and update profile */}
            {/* <ProfileBios /> */}

            {/* A List of all personal posts */}
            { data ? <FlatList 
                data={data}
                renderItem={ ({ item }) => (
                    <>
                        { item.fileUrl ? <CardStory item={ item } /> : <TweeetPost item={ item } /> }
                    </>
                ) }
                keyExtractor={ item => item._id }
            /> : <Text>loading...</Text>}

        </SafeAir>
    )
}