import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

// Styled Components...
import { ChatDisplay } from '../chat-view.styles';

// Chat Components
import { LeftDisplaychat } from './chat-left-display.component';
import { RightDisplayChat } from './chat-right-display.component';

export const ChatDisplaySegment = () => {

    return (
        <ChatDisplay>

            <ScrollView>
                <LeftDisplaychat />

                <RightDisplayChat />

                <RightDisplayChat />
                <RightDisplayChat />
                <RightDisplayChat />
                <RightDisplayChat />
                <RightDisplayChat />

                
                <LeftDisplaychat />
                <LeftDisplaychat />
                <LeftDisplaychat />
                <LeftDisplaychat />
                <LeftDisplaychat />
                
                <LeftDisplaychat />

                <RightDisplayChat />
                <LeftDisplaychat />

                <RightDisplayChat />
            </ScrollView>

        </ChatDisplay>
    )
}
