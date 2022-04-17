import React from 'react';
import { Text } from 'react-native';

// Using safeAreaView for the post screen
import { SafeAir } from '../../Components/Utility/safe-area.component';

// Necessary import to keep the PostScreen in order.
import { Story } from '../../Components/Posts/Story/story.component';
import { CardStory } from '../../Components/Posts/Card-story';

export const PostScreen = () => {

    return (
        <SafeAir>

            <Story />

            <CardStory />
            
            <Text>
                
                Post Screen
            </Text>
        </SafeAir>
    )
}
