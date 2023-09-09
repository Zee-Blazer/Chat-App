// Firebase Initialization
import { initializeApp } from 'firebase/app';

// Moment for time and date Version 1.2.0
import moment from 'moment/moment';

// axios
import axios from 'axios';

// Firebase Database
import { getDatabase, ref, push, onValue, remove } from 'firebase/database';

// Firebase Storage
import { getStorage, ref as real, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DB = getDatabase();

export const storage = getStorage();

export const time = moment();

// Send a new message to the firebase chat collection
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
            
        })
        .catch(err => console.log(err));
}

// Send to the Firebase a new notification -- Version 1.2.0
export const messageNotification = ({msg, user_id, id}) => {
    push( 
        ref( DB, `Notification/${ id }/${ user_id }` ), 
        { messages: { msg, senderId: id, time: moment().format('MM/DD/YY, h:mm a') } } 
    )
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
}

// Delete a specific notification
export const deleteNotification = ({ user_id, id }) => {
    remove(
        ref( DB, `Notification/${ id }/${ user_id }` )
    )
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
}

// Get all the messages in the firebase realtime chat collection
export const allMessages = (setMessages, chatId) => {
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

// Get the last message in the list of chat between friends
export const lastMessage = (setMessages, setLastMsg, setTime, chatId) => {
    if (chatId) {
        onValue(ref(DB, `Chats/${[chatId[0] + chatId[1]]}`), (snapshot) => {
            const msg = [];
            snapshot.forEach(childSnapshot => {
                msg.push({
                    id: childSnapshot.key, ...childSnapshot.val()
                })
            })

            setMessages(msg);
            const num = msg.length - 1;
            setLastMsg([msg[num].messages.msg, msg[num].messages.senderId])
            setTime(msg[num].messages.time.split(",")[1]);
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

// Get all new notifications 
export const getAllNew = ({ setAllNewNotifications, user_id }) => {
    onValue(ref(DB, `Notification/${ user_id }`), (snapshot) => {
        const msg = [];
        snapshot.forEach(childSnapshot => {
            msg.push({
                id: childSnapshot.key, ...childSnapshot.val()
            })
        })
        // console.log(msg);
        setAllNewNotifications(msg.length);
    })
}
