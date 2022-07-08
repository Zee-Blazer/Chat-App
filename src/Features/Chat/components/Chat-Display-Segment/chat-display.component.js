import React, { useContext, useEffect } from 'react';
import { ScrollView, FlatList } from 'react-native';

// Styled Components...
import { ChatDisplay } from '../chat-view.styles';

// Auth Context
import { AuthContext } from '../../../../Services/Authentication/auth.context';

// Message Api
import { allMessages } from '../../../../Services/API\'s/ChatBox.api';

// Chat Components
import { LeftDisplaychat } from './chat-left-display.component';
import { RightDisplayChat } from './chat-right-display.component';

export const ChatDisplaySegment = () => {

    const { user_id } = useContext(AuthContext);

    useEffect( () => {
        // allMessages()
    }, [] )

    return (
        <ChatDisplay>

            <ScrollView>
                <LeftDisplaychat />
            </ScrollView>

        </ChatDisplay>
    )
}
