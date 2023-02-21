import React from 'react';
import { Text, StyleSheet, Image } from 'react-native';
// import { Text, Avatar } from 'react-native-paper';

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
                <Image source={{ uri: image }} style={{ width: 224, height: 250 }} />
            }
            <LeftAngle style={{ transform: [{ rotate: "45deg" }] }} />
            <Time style={{ alignSelf: "flex-end" }}>10:45PM</Time>
        </ChatLeftDisplay>
    )
}
