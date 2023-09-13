import React, { useState, useContext } from 'react';

import { Text } from 'react-native-paper';

// Styled components
import { 
    ProfileAboutCont, 
    ProfileAboutLabel, 
    ProfileAboutInputBox,
    ProfileAboutInput,
    ProfileAboutButton,
    ProfileAboutBtnLabel
} from "../profile-screen.style";

// Profile Context Version 1.2.0
import { ProfileContext } from "../../../../Services/Profile/profile.context";

// Theme 
import { theme } from "../../../../Infrastructure/Theme";

export const ProfileAbout = ({ type }) => {

    const { specificUser, updateBio, status } = useContext(ProfileContext);

    const [bio, setBio] = useState();

    return (
        <>
            <ProfileAboutCont>
                { 
                    status && 
                    <Text 
                        style={{ 
                            color: 'lightgreen', fontWeight: 700, textAlign: "center", marginBottom: 4 
                        }} 
                    >
                        Your about has been updated
                    </Text> 
                }
                <ProfileAboutInputBox>
                    <ProfileAboutLabel>Username:</ProfileAboutLabel>
                    <ProfileAboutInput 
                        editable={false}
                        defaultValue={
                            type.type !== "view" ?
                                specificUser && specificUser.username.toUpperCase() :
                                type.username
                        }
                    />
                </ProfileAboutInputBox>

                <ProfileAboutInputBox>
                    <ProfileAboutLabel>Email:</ProfileAboutLabel>

                    <ProfileAboutInput 
                        editable={false}
                        defaultValue={
                            type.type !== "view" ?
                                specificUser && specificUser.username.toUpperCase() :
                                type.item.email
                        }
                    />
                </ProfileAboutInputBox>

                <ProfileAboutInputBox>
                    <ProfileAboutLabel>Bio:</ProfileAboutLabel>
                    <ProfileAboutInput 
                        editable
                        multiline
                        placeholder={ 
                            type.type !== "view" ?
                                specificUser && specificUser.bio ? 
                                    specificUser.bio : 
                                    "Write a Bio"  :
                                type.item.bio
                        }
                        value={ 
                            type.type !== 'view' ?
                                !bio ? specificUser && specificUser.bio : bio :
                                type.item.bio
                        }
                        placeholderTextColor={ theme.colors.dark.text.secondary }
                        onChangeText={ setBio }
                    />
                </ProfileAboutInputBox>

            </ProfileAboutCont>

            {
                type.type !== "view" &&
                <ProfileAboutButton onPress={ () => updateBio(bio) }>
                    <ProfileAboutBtnLabel>UPDATE</ProfileAboutBtnLabel>
                </ProfileAboutButton>
            }
        </>
    )
}
