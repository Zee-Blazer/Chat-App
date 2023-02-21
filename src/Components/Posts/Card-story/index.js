import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

// Icons
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

// The container card
import { StoryCard } from '../../Tools/Styled-Components/post-card.component';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// The Image Card
import { StoryImage } from './image-story-container.component';

// Profile Post
import { ProfilePost } from './profile-post.component';

// Axios API
import { likePost } from '../../../Services/API\'s/Post.api';

// Styled components
import { 
    FlexDisplay,
    LikeOption,
    RecCount
} from '../../Tools/Styled-Components/post-card.component';
import { Line } from '../../Tools/Styled-Components/post-card.component';

export const CardStory = ({ item }) => {
    const [user_id, setUser_id] = useState();
    const [color, setColor] = useState("black");

    useEffect(async () => {
        setUser_id(await AsyncStorage.getItem(`@user_id`));
    }, [])

    return (
        <>
            <StoryCard>
                <StoryImage imgUri={ item.fileUrl } />

                <ProfilePost user_id={ item.user_id } msg={ item.msg } />

                <FlexDisplay>

                    <LikeOption onPress={ () => likePost(item._id, user_id, setColor) }>
                        <AntDesign name="like2" size={24} color={color} />
                        <Text style={{ color }}>Like: { item.likes }</Text>
                    </LikeOption>

                    <Line />

                    <LikeOption>
                        <FontAwesome name="commenting-o" size={24} color="black" />
                        <Text>Comment: { item.comments.length }</Text>
                    </LikeOption>

                </FlexDisplay>
            </StoryCard>
        </>
    )
}