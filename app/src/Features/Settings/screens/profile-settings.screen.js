import React, { useState, useEffect, useContext } from 'react';
import { Text, ScrollView, FlatList, RefreshControl } from 'react-native';

// Safe Area
import { SafeAir } from '../../../Components/Utility/safe-area.component';

// Authentocation Context
import { AuthContext } from '../../../Services/Authentication/auth.context';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Context Provider Version 1.2.0
import { ProfileContextProvider } from '../../../Services/Profile/profile.context';
import { FriendsContextProvider } from '../../../Services/Friends/friends.context';
import { FollowContextProvider } from '../../../Services/Follow/follow.context';

// Post API call
import { specificUserPost } from '../../../Services/API\'s/Post.api';

// Components
import { ProfileHeader } from '../components/profile-header.component';
import { ProfileInfo } from '../components/Profile-settings/profile-info.component';
import { ProfileTabBar } from '../components/Profile-settings/profile-tab-bar.component';

import { ProfileBios } from '../components/Profile-settings/profile-bio.component';

import { ProfilePicDisplay } from '../components/Profile-settings/profile-pic-display.component';

import { ProfileTabDisplayer } from '../components/Profile-settings/profile-tab-displayer.component';

// Styled Components
import { CoverImage } from '../components/profile-screen.style';

export const ProfileSettingsScreen = ({ route }) => {

    const { recentRecord } = useContext(AuthContext);

    const type = route.params; // The type of screen that should be displayed... User or friend

    const [user_id, setUser_id] = useState();
    const [data, setData] = useState();

    // Tab displayer state
    const [tabDisplayer, setTabDisplayer] = useState("Post");

    // Picture display
    const [showPic, setShowPic] = useState(false);

    const navItems = [
        { text: "Post" },
        { text: "About" },
        { text: "Friends" }
    ]

    useEffect(async () => {
        setUser_id(await AsyncStorage.getItem(`@user_id`));
    }, [])

    useEffect( () => {
        if(type.type !== "view"){
            specificUserPost(user_id, setData);
        }
        else{
            specificUserPost(type.id, setData)
        }
    }, [user_id] );

    const changeTab = (text) => setTabDisplayer(text);

    const showPicFunc = () => setShowPic(!showPic)

    return (
        <SafeAir>
            
            <ProfileContextProvider>

                <ScrollView
                    refreshControl={
                        <RefreshControl onRefresh={ recentRecord } />
                    }
                >

                    { showPic && <ProfilePicDisplay showPicFunc={ showPicFunc } type={ type } /> }

                    {/* The profile header with all Images/profile pictures */}
                    <FollowContextProvider>
                        <ProfileHeader showPicFunc={ showPicFunc } type={ type } />
                    </FollowContextProvider>

                    {/* Information about the current profile... It's following and bios  */}
                    <ProfileInfo type={ type } />

                    {/* The Profile TabBar for smooth navigation in the profiles screen  */}
                    <ProfileTabBar 
                        changeTab={ changeTab } 
                        active={ tabDisplayer } 
                        navItems={ navItems } 
                        type={ type }
                    />

                    {/* Profile Bios were you can check and update profile */}
                    {/* <ProfileBios /> */}

                    {/* Profile Tab displayer... that display's all the elements of the tab  */}
                    <FriendsContextProvider>
                        <ProfileTabDisplayer text={ tabDisplayer } data={ data } type={ type } />
                    </FriendsContextProvider>

                </ScrollView>

            </ProfileContextProvider>

        </SafeAir>
    )
}