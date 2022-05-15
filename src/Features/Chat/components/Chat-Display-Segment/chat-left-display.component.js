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

export const LeftDisplaychat = () => {

    return (
        <ChatLeftDisplay style={{ zIndex: 3 }}>
            {/* <ChatOwner>Name</ChatOwner> */}

            <Chat style={{ color: "#FCF6f5FF" }}>Hello My Guy jk sdcjhb sdciub sndmdciuons dckn iubs dcn sdjc bji </Chat>
            <LeftAngle style={{ transform: [{ rotate: "45deg" }] }} />
            <Time style={{ alignSelf: "flex-end" }}>10:45PM</Time>
        </ChatLeftDisplay>
    )
}
