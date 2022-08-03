import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Styled Components
import { 
    ChatRightDisplay,
    RightAngle,
    Time,
    Chat
} from '../chat-view.styles';

export const RightDisplayChat = ({ ele, checker }) => {

    console.log(ele, checker);

    return (
        <ChatRightDisplay  style={ checker ? styles.chatRight : styles.chatLeft }>
            <Chat style={ checker ? styles.right : styles.left }>
                { ele }
            </Chat>
            <RightAngle />

            <Time>10:52PM</Time>
        </ChatRightDisplay>
    )
}

const styles = StyleSheet.create({
    right: {
        backgroundColor: "whitesmoke",
        color: "#195190FF",
        width: "21px",
        height: "21px",
        marginRight: "-15px",
        // borderBottomRightRadius: "21px",
        alignSelf: "flex-end",
    },

    chatRight: {
        backgroundColor: "whitesmoke",
        margin: "4px 14px",
        padding: "4px 8px",
        alignSelf: "flex-end",
        borderRadius: 9,
        zIndex: 1,
        maxWidth: "240px",
    },

    chatLeft: {
        backgroundColor: "#195190FF",
        margin: "4px 14px",
        padding: "4px 8px",
        alignSelf: "flex-start",
        borderRadius: 9,
        maxWidth: "240px",
    },

    left: {
        backgroundColor: "#195190FF",
        color: "#FCF6f5FF",
        width: "21px",
        height: "21px",
        marginLeft: '-15px',
        // borderBottomRightRadius: "21px",
    }
});
