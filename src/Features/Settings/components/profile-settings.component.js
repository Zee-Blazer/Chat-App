import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-paper';

// Setting styled components
import { 
    ProfileSet,
    Spread,
    BiggerTitle,
    SmallerTitle
} from '../../../Components/Tools/Styled-Components/settings-screen.component';

export const ProfileSettings = () => {

    return (
        <ProfileSet>
            <Avatar.Image 
                size={84}
                source={{ uri: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg&ga=GA1.2.1411842976.1640908800" }}
            />
            
            <Spread>
                <BiggerTitle>Name</BiggerTitle>
                <SmallerTitle>Sub Title</SmallerTitle>
            </Spread>
        </ProfileSet>
    )
}