import React from 'react';
import { View } from 'react-native'; 

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
        </View>
    )
}
