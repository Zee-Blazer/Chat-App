import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Image } from 'react-native';

// Styled Components
import { 
    ChatRightDisplay,
    RightAngle,
    Time,
    Chat
} from '../chat-view.styles';

export const RightDisplayChat = ({ ele, image }) => {
    console.log(ele, image);

    return (
        <ChatRightDisplay>
            { 
                !ele ?
                <Chat>
                    { ele }
                </Chat>
                :
                <Image source={{ uri: image }} style={{ width: 224, height: 250 }} />
            }
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
