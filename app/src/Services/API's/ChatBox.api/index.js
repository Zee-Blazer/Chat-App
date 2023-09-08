// Firebase Initialization
import { initializeApp } from 'firebase/app';

// Moment for time and date Version 1.2.0
import moment from 'moment/moment';

// axios
import axios from 'axios';

// Firebase Database
import { getDatabase, ref, push, onValue } from 'firebase/database';

// Firebase Storage
import { getStorage, ref as real, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DB = getDatabase();

export const storage = getStorage();

export const time = moment();

export const messageSender = async ({ msg, userId, chatId }) => {
    const valueOfPerson = await AsyncStorage.getItem('@user_id');
    const userDetails = await AsyncStorage.getItem('@user_details');

    // console.log(chatId[0]+chatId[1]);

    // console.log(valueOfPerson, `This is working...`, msg);
    push(
        ref( DB, `Chats/${chatId[0] + chatId[1]}` ), 
        { messages: { msg, senderId: valueOfPerson, time: moment().format('MM/DD/YY, h:mm a') } }
    )
        .then(res => {
            console.log("Sent");
            console.log(moment().format("LT"))
        })
        .catch(err => console.log(err));
}

export const allMessages = (setMessages, chatId) => {
    // console.log("Working");
    // console.log(chatId);
    if (chatId) {
        onValue(ref(DB, `Chats/${[chatId[0] + chatId[1]]}`), (snapshot) => {
            const msg = [];
            snapshot.forEach(childSnapshot => {
                msg.push({
                    id: childSnapshot.key, ...childSnapshot.val()
                })
            })
            // console.log(msg);
            setMessages(msg);
        })
    }
}

export const sendPic = async (image, result, chatId) => {
    try {
        const filename = image.uri.substring(image.uri.lastIndexOf('/') + 1);

        const storageRef = real(storage, filename);

        const uploadTask = uploadBytesResumable(storageRef, result);
        uploadTask.on(
            "state_changed",
            (snapshot) => { },
            (err) => { console.log(err) },
            async () => {
                const valueOfPerson = await AsyncStorage.getItem('@user_id');
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadUrl) => {
                        // console.log(downloadUrl)

                        push(
                            ref(
                                    DB, 
                                    `Chats/${chatId[0] + chatId[1]}`
                                ), 
                                { messages: { img: downloadUrl, msg: false, senderId: valueOfPerson, time: "2:25pm" } }
                            )
                            .then(res => {
                                console.log("Sent");
                            })
                            .catch(err => console.log(err));
                    })
                    .catch(err => console.log(err))
                
            }
        )

    }
    catch (err) {
        console.log(err);
    }

}
