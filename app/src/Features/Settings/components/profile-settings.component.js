import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-paper';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Root Navigation
import * as RootNavigation from '../../../Infrastructure/Navigation/root-navigation';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Image URL Link
import { uriLink } from '../../../Services/Axios/axios-api';

// Setting styled components
import {
    ProfileSet,
    Spread,
    BiggerTitle,
    SmallerTitle
} from '../../../Components/Tools/Styled-Components/settings-screen.component';

export const ProfileSettings = () => {

    const navigation = useNavigation();

    const [userRecord, setUserRecord] = useState();

    const getAllInfo = async () => {
        const UserInfo = await AsyncStorage.getItem(`@user_details`);
        setUserRecord(JSON.parse(UserInfo));
        console.log(UserInfo);
    }

    useEffect(() => {
        getAllInfo();
    }, [])

    console.log(userRecord);

    return (
        <ProfileSet onPress={() => navigation.navigate("SettingsSub", { screen: "Profile", params: { type: "profile" } })}>
            <Avatar.Image
                size={84}
                source={{
                    uri: `${userRecord && userRecord.profile ? uriLink + "profile/pic/" + userRecord.profile :
                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                        }`
                }}
            />

            <Spread>
                <BiggerTitle>{userRecord && userRecord.username}</BiggerTitle>
                <SmallerTitle>{userRecord && userRecord.email}</SmallerTitle>
            </Spread>
        </ProfileSet>
    )
}