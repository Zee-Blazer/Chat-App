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

export const ProfileInfo = ({ type }) => {

    const navigation = useNavigation();

    const { specificUser } = useContext(ProfileContext);

    return (
        <ProfileDetailsCont>
            <ProfileUsername onPress={ () => console.log(type) }>
                { 
                    type.type !== "view"  ? 
                        specificUser && specificUser.username.toUpperCase() :
                        type.item.username.toUpperCase()
                }
            </ProfileUsername>
            <ProfileEmail>
                { 
                    type.type !== "view" ? 
                        specificUser && specificUser.email :
                        type.item.email
                }
            </ProfileEmail>

            <ProfileBio>
                { 
                    type.type !== "view" ?
                        specificUser && specificUser.bio ? 
                        specificUser.bio : 
                        <Text style={{ color: 'grey', fontSize: 18 }}>
                            Write a Bio in the about section.
                        </Text> :
                        type.item.bio
                }
            </ProfileBio>
            <FollowBox>
                <TouchableOpacity 
                    onPress={ () => navigation.navigate(
                            "SettingsSub", 
                            { 
                                screen: "Followings", 
                                params: { 
                                    type: type.type, 
                                    item: type.type !== "view" ? specificUser : type.item 
                                } 
                            }
                        ) 
                    }
                >
                    <FollowersLabel>
                        <WhiteLabel>
                            { 
                                type.type !== "view" ?
                                    specificUser && specificUser.following.length :
                                    type.item.following.length
                            } 
                        </WhiteLabel>
                        Following ~ 
                        <WhiteLabel> 
                            { 
                                type.type !== "view" ?
                                    specificUser && specificUser.followers.length :
                                    type.item.followers.length
                            } 
                        </WhiteLabel> 
                        Followers
                    </FollowersLabel>
                </TouchableOpacity>
            </FollowBox>
        </ProfileDetailsCont>
    )
}
