import React, { useState, useEffect, useContext } from 'react';
import { LogBox } from 'react-native';
import { Text, View, TouchableOpacity, Keyboard, Dimensions } from 'react-native';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Images picker
import * as ImagePicker from 'expo-image-picker';

// Auth Context
import { AuthContext } from '../../../Services/Authentication/auth.context';

// Icons
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

// Api's
import { 
    messageSender, 
    sendPic, 
    messageNotification, 
    deleteNotification 
} from '../../../Services/API\'s/ChatBox.api';

import {
    ChatBox,
    MessagerNest,
    SenderIcon,
    MessagerBox
} from './chat-view.styles';

const windowHeight = Dimensions.get("window").height;

export const ChatBoxSender = ({ id }) => {
    LogBox.ignoreLogs(['Setting a timer']);

    const [keyboardActive, setKeyboardActive] = useState(false);

    const [user_id, setUser_id] = useState();
    const [chatId, setChatId] = useState();
    const [msg, setMsg] = useState();
    const [height, setHeight] = useState();

    const sendMsg = () => {
        messageSender({ msg, user_id, chatId });
        messageNotification({ msg, user_id, id  })
        setMsg("");
    }

    const delNot = () => {
        deleteNotification({ user_id, id })
    }

    const selectFile = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            })

            if (!result.canceled) {
                const source = { uri: result.uri };
                const response = await fetch(source.uri);
                const blob = await response.blob();
                if(id, user_id){
                    sendPic(source, blob, [id, user_id].sort());
                }
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(async () => {
        setUser_id(await AsyncStorage.getItem(`@user_id`));
    }, [])

    useEffect(() => {
        if (id, user_id) {
            setChatId([id, user_id].sort());
        }
    }, [user_id]);

    const keyboardActiveListenerShow = () => setKeyboardActive(true)
    const keyboardActiveListenerHide = () => setKeyboardActive(false)

    Keyboard.addListener("keyboardDidShow", keyboardActiveListenerShow);
    Keyboard.addListener('keyboardDidHide', keyboardActiveListenerHide);

    return (
        <ChatBox windowHeight={ windowHeight } dimension={ keyboardActive } factor={ keyboardActive }>

            <MessagerNest>
                <MessagerBox
                    // style={{ minHeight: height < 40 ? height : 40 }}
                    placeholder="Type a Message..."
                    value={msg}
                    onChangeText={setMsg}
                    autoCapitalize="none"
                    autoCorrect={false}
                    multiline={true}
                    numberOfLines={4}
                    onContentSizeChange={
                        ({ nativeEvent: { contentSize: { width, height } } }) => setHeight(height)
                    }
                />
                {
                    !msg &&
                    <TouchableOpacity onPress={selectFile}>
                        <FontAwesome5 name="images" size={24} color="lightgreen" />
                    </TouchableOpacity>
                }
            </MessagerNest>

            <SenderIcon>
                <FontAwesome name="send-o" size={28} color="blue" onPress={() => sendMsg()} />
            </SenderIcon>

        </ChatBox>
    )
}