import React from 'react';
import { Text, View } from 'react-native'; 

// Components 
import { LeftDisplaychat } from './chat-left-display.component';
import { RightDisplayChat } from './chat-right-display.component';

export const ChatDisplayer = ( checker, item ) => {
    // console.log(item);

    return (
        <View>
            {/* { 
                checker ?
                    <RightDisplayChat ele={ item.messages.msg } />
                :
                    <LeftDisplaychat ele={ item.messages.msg } />
            } */}
            <LeftDisplaychat ele="This is actually cool" />
            <Text>This is happening realtime</Text>
        </View>
    )
}
