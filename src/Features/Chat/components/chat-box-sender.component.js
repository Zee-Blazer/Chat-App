import React, { useState, useEffect, useContext } from 'react';
import { LogBox } from 'react-native';
import { Text, View } from 'react-native';

// Auth Context
import { AuthContext } from '../../../Services/Authentication/auth.context';

// Icons
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

// Api's
import { messageSender } from '../../../Services/API\'s/ChatBox.api';

import { 
    ChatBox,
    MessagerNest,
    SenderIcon,
    MessagerBox
} from './chat-view.styles';

export const ChatBoxSender = () => {
    LogBox.ignoreLogs(['Setting a timer']);

    const { user_id } = useContext(AuthContext);

    const [msg, setMsg] = useState();
    const [height, setHeight] = useState();

    const sendMsg = () => {
        messageSender({msg, user_id});
        setMsg("");
    }

    useEffect( () => {}, [] )

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
                <FontAwesome name="send-o" size={28} color="blue" onPress={ () => sendMsg() } />
            </SenderIcon>

        </ChatBox>
    )
}