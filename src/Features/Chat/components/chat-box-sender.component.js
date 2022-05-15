import React, { useState } from 'react';
import { Text, View } from 'react-native';

// Icons
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { 
    ChatBox,
    MessagerNest,
    SenderIcon,
    MessagerBox
} from './chat-view.styles';

export const ChatBoxSender = () => {

    const [msg, setMsg] = useState();
    const [height, setHeight] = useState();

    return (
        <ChatBox>
            
            <MessagerNest>
                <MessagerBox 
                    style={{ minHeight: height < 60 ? height : 60 }}
                    placeholder="Type a Message..." 
                    value={ msg }
                    onChangeText={ setMsg }
                    autoCapitalize="none"
                    autoCorrect={ false }
                    multiline={ true }
                    onContentSizeChange={ 
                        ({ nativeEvent: { contentSize: { width, height } } }) => setHeight(height) 
                    }
                />
                { !msg && <FontAwesome5 name="images" size={24} color="lightgreen" /> }
            </MessagerNest>

            <SenderIcon>
                <FontAwesome name="send-o" size={28} color="blue" />
            </SenderIcon>

        </ChatBox>
    )
}