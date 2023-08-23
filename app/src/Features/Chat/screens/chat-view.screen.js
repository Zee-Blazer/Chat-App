import React from 'react';
import { View } from 'react-native';

import { 
    AccountBackground,
    AccountCover
} from '../components/chat-view.styles';

// Chat Box Component
import { ChatBoxSender } from '../components/chat-box-sender.component';
import { ChatDisplaySegment } from '../components/Chat-Display-Segment/chat-display.component';

export const ChatViewScreen = ({ route }) => {


    return (
        <AccountBackground>
            <AccountCover />
            <ChatDisplaySegment id={ route.params.id } />

            <ChatBoxSender id={ route.params.id } />
        </AccountBackground>
    )
}
