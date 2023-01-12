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

export const LeftDisplaychat = ({ ele, image }) => {

    return (
        <ChatLeftDisplay style={{ zIndex: 3 }}>
            {/* <ChatOwner>Name</ChatOwner> */}

            {
                ele ?
                <Chat style={{ color: "#FCF6f5FF" }}>
                    { ele }
                </Chat>
                :
                <Text>HEllo</Text>
            }
            <LeftAngle style={{ transform: [{ rotate: "45deg" }] }} />
            <Time style={{ alignSelf: "flex-end" }}>10:45PM</Time>
        </ChatLeftDisplay>
    )
}
