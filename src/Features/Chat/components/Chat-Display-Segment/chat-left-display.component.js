import React from 'react';
import { Text, Avatar } from 'react-native-paper';

// Styled Components
import { 
    ChatLeftDisplay,
    LeftAngle,
    ChatOwner,
    Chat,
    Time
} from '../chat-view.styles';

export const LeftDisplaychat = ({ ele }) => {

    return (
        <ChatLeftDisplay style={{ zIndex: 3 }}>
            {/* <ChatOwner>Name</ChatOwner> */}

            <Chat style={{ color: "#FCF6f5FF" }}>
                { ele }
            </Chat>
            <LeftAngle style={{ transform: [{ rotate: "45deg" }] }} />
            <Time style={{ alignSelf: "flex-end" }}>10:45PM</Time>
        </ChatLeftDisplay>
    )
}
