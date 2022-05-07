import React from 'react';
import { Text, TouchableOpacity, ScrollView } from 'react-native';

import { SafeAir } from '../../Components/Utility/safe-area.component';

// Story Component
import { Story } from '../../Components/Posts/Story/story.component';

// Chat Screen Styled Components
import { 
    SplitScreen,
    SplitText, 
    Line,
    FinderSearch
} from '../../Components/Tools/Styled-Components/chat-screen.component';

import { ChatClient } from './components/chat-client.component';

export const ChatScreen = () => {

    return (
        <SafeAir>

            <Story />

            <SplitScreen>
                <TouchableOpacity>
                    <SplitText>Friends</SplitText>
                </TouchableOpacity>

                <Line />

                <TouchableOpacity>
                    <SplitText>Find</SplitText>
                </TouchableOpacity>
            </SplitScreen>

            <FinderSearch placeholder='Search' />

            <ScrollView>
                <ChatClient />
                <ChatClient />
                <ChatClient />
                <ChatClient />
                <ChatClient />
                <ChatClient />
                <ChatClient />
                <ChatClient />
                <ChatClient />
            </ScrollView>
            
        </SafeAir>
    )
}
