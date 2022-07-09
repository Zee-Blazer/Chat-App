import React from 'react';
import { Text } from 'react-native';

// Styled Components
import { 
    ChatRightDisplay,
    RightAngle,
    Time,
    Chat
} from '../chat-view.styles';

export const RightDisplayChat = ({ ele }) => {

    return (
        <ChatRightDisplay>
            <Chat style={{ color: "#195190FF" }}>
                { ele }
            </Chat>
            <RightAngle />

            <Time>10:52PM</Time>
        </ChatRightDisplay>
    )
}