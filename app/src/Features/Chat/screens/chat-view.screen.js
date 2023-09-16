import React, { useState, useEffect } from 'react';
import { View, Dimensions, Keyboard, Text } from 'react-native';

import { 
    AccountBackground,
    AccountCover
} from '../components/chat-view.styles';

// Chat Box Component
import { ChatBoxSender } from '../components/chat-box-sender.component';
import { ChatDisplaySegment } from '../components/Chat-Display-Segment/chat-display.component';

const windowHeight = Dimensions.get("window").height;

export const ChatViewScreen = ({ route }) => {

    const [reduce, setReduce] = useState(false);
    const [keyboardActive, setKeyboardActive] = useState(false);

    
    const keyboardActiveListenerShow = () => {
        setKeyboardActive(true)
        console.log("Is Active")
    }
    const keyboardActiveListenerHide = () => {
        setKeyboardActive(false)
        console.log("Is not Active")
    }

    Keyboard.addListener("keyboardDidShow", keyboardActiveListenerShow);
    Keyboard.addListener('keyboardDidHide', keyboardActiveListenerHide);

    return (
        <AccountBackground setHeight={ windowHeight }>
            {/* <Text>Hello { reduce ? "Hey there" : "Just false" }</Text> */}
            <AccountCover />
            <ChatDisplaySegment id={ route.params.id } />

            <ChatBoxSender id={ route.params.id } />
        </AccountBackground>
    )
}
