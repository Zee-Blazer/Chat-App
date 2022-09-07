import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-paper';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Root Navigation
import * as RootNavigation from '../../../Infrastructure/Navigation/root-navigation';

// Setting styled components
import { 
    ProfileSet,
    Spread,
    BiggerTitle,
    SmallerTitle
} from '../../../Components/Tools/Styled-Components/settings-screen.component';

export const ProfileSettings = () => {

    const [userRecord, setUserRecord] = useState();

    const getAllInfo = async () => {
        const UserInfo = await AsyncStorage.getItem(`@user_details`);
        setUserRecord(JSON.parse(UserInfo));
    }

    useEffect( () => {
        getAllInfo();
    }, [] )

    return (
        <ProfileSet onPress={ () => RootNavigation.navigate("SettingsSub") }>
            <Avatar.Image 
                size={84}
                source={{ uri: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg&ga=GA1.2.1411842976.1640908800" }}
            />
            
            <Spread>
                <BiggerTitle>{ userRecord && userRecord.username }</BiggerTitle>
                <SmallerTitle>{ userRecord && userRecord.email }</SmallerTitle>
            </Spread>
        </ProfileSet>
    )
}