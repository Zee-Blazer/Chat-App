import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

// Icons
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

// The container card
import { StoryCard } from '../../Tools/Styled-Components/post-card.component';

// The Image Card
import { StoryImage } from './image-story-container.component';
// Profile Post
import { ProfilePost } from './profile-post.component';

// Styled components
import { FlexDisplay } from '../../Tools/Styled-Components/post-card.component';

export const CardStory = () => {

    return (
        <>
            <StoryCard>
                <StoryImage />

                <ProfilePost />

                <FlexDisplay>

                    <TouchableOpacity>
                        <AntDesign name="like2" size={24} color="black" />
                        <Text>Like</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <FontAwesome name="commenting-o" size={24} color="black" />
                        <Text>Comment</Text>
                    </TouchableOpacity>

                </FlexDisplay>
            </StoryCard>
        </>
    )
}