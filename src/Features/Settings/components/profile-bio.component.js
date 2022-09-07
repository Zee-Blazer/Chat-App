import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Expo Icons
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// Styled
import { 
    BiosH1Tag, 
    SideSpacer, 
    BiosInput, 
    BiosInputContainer, 
    MediaCont,
    PlusMediaCont,
    PlusMediaLabel
} from './profile-screen.style';

export const ProfileBios = () => {

    return (
        <SideSpacer>
            <BiosH1Tag>Bio</BiosH1Tag>

            <BiosInputContainer>
                <Entypo name="image" size={28} color="purple" />
                <BiosInput 
                    placeholder="What's on your mind?"
                    placeholderTextColor="black"
                />

                <TouchableOpacity>
                    <Ionicons name="add" size={28} color="green" style={{ alignSelf: 'flex-end' }} />
                </TouchableOpacity>
                
            </BiosInputContainer>

            <MediaCont>
                <PlusMediaCont color="#fc0303">
                    <PlusMediaLabel>Add Video</PlusMediaLabel>
                    <Feather name="play" size={24} color="lightblue" />
                </PlusMediaCont>
                <PlusMediaCont>
                    <PlusMediaLabel>Add Photo</PlusMediaLabel>
                    <AntDesign name="picture" size={24} color="lightblue" />
                </PlusMediaCont>
            </MediaCont>
            
        </SideSpacer>
    )
}
