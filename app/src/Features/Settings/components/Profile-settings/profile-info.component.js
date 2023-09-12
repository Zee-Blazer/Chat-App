import React, { useContext } from 'react';

// React native component
import { TouchableOpacity, Text } from "react-native";

// Profile Context Version 1.2.0
import { ProfileContext } from '../../../../Services/Profile/profile.context';

// Styled component
import { 
    ProfileDetailsCont, 
    ProfileUsername, 
    ProfileEmail,
    FollowBox,
    FollowersLabel,
    WhiteLabel,
    ProfileBio
} from "../profile-screen.style";

// The Navigation
import { useNavigation } from "@react-navigation/native";

export const ProfileInfo = () => {

    const navigation = useNavigation();

    const { specificUser } = useContext(ProfileContext);

    return (
        <ProfileDetailsCont>
            <ProfileUsername>{ specificUser && specificUser.username.toUpperCase() }</ProfileUsername>
            <ProfileEmail>{ specificUser && specificUser.email }</ProfileEmail>

            <ProfileBio>
                { 
                    specificUser && specificUser.bio ? 
                        specificUser.bio : 
                        <Text style={{ color: 'grey', fontSize: 18 }}>
                            Write a Bio in the about section.
                        </Text>
                }
            </ProfileBio>
            <FollowBox>
                <TouchableOpacity onPress={ () => navigation.navigate("SettingsSub", { screen: "Followings" }) }>
                    <FollowersLabel>
                        <WhiteLabel>{ specificUser && specificUser.following.length } </WhiteLabel>
                        Following
                        <WhiteLabel> { specificUser && specificUser.followers.length } </WhiteLabel> 
                        Followers
                    </FollowersLabel>
                </TouchableOpacity>
            </FollowBox>
        </ProfileDetailsCont>
    )
}
