import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// React native paper
import { Avatar } from 'react-native-paper';

// Expo Icons
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// Gallary features
import { launchImageLibrary } from 'react-native-image-picker';

// Styled
import { CoverImage, SideDisplayView, EditProfileImage, MainSpacer } from './profile-screen.style';

export const ProfileHeader = () => (
    <View>
        <CoverImage 
            source={{ uri: "https://cdn-images.zety.com/pages/best_font_for_cover_letter_6.jpg" }}
        />

        <Avatar.Image
            size={ 114 }
            source={{ uri: "https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg" }}
            style={styles.profileAvatar}
            onPress={ () => console.log("This is working fine") }
        />
        <EditProfileImage 
            onPress={ () => console.log("This should work perfectly well") }
        >
            Profile Edit
        </EditProfileImage>

        <SideDisplayView>
            <MaterialIcons 
                name="message" 
                size={27} 
                color="blue"  
                style={ styles.buttonIcon }
            />

            <FontAwesome 
                name="pencil" 
                size={27} 
                color="green"
                style={ styles.buttonIcon }
            />
        </SideDisplayView>
        
        <MainSpacer />
    </View>
)

const styles = StyleSheet.create({
    profileAvatar: {
        position: "absolute",
        marginTop: 120,
        marginLeft: 16,
    },
    buttonIcon:  {
        backgroundColor: 'lightgrey', 
        padding: 7, 
        borderRadius: 50,
        marginLeft: 18
    }
})
