import React from 'react';
import { Text } from 'react-native';

// The container card
import { StoryCard } from '../../Tools/Styled-Components/post-card.component';

// The Image Card
import { StoryImage } from './image-story-container.component';

export const CardStory = () => {

    return (
        <>
            <StoryCard>
                <StoryImage />
                
                <Text>Story Card Teller</Text>
            </StoryCard>
        </>
    )
}