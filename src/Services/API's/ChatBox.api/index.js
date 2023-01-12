// Firebase Initialization
import { initializeApp } from 'firebase/app';

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

export const messageSender = async ({ msg, userId, chatId }) => {
    const valueOfPerson = await AsyncStorage.getItem('@user_id');
    const userDetails = await AsyncStorage.getItem('@user_details');

    // console.log(chatId[0]+chatId[1]);

    console.log(valueOfPerson, `This is working...`, msg);
    push(ref(DB, `Chats/${chatId[0] + chatId[1]}`), { messages: { msg, senderId: valueOfPerson, time: "2:25pm" } })
        .then(res => {
            console.log("Sent");
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

// const storage = getStorage();
// const storageRef = ref(storage, 'images/rivers.jpg');

// const uploadTask = uploadBytesResumable(storageRef, file);

// // Register three observers:
// // 1. 'state_changed' observer, called any time the state changes
// // 2. Error observer, called on failure
// // 3. Completion observer, called on successful completion
// uploadTask.on('state_changed',
//   (snapshot) => {
//     // Observe state change events such as progress, pause, and resume
//     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     console.log('Upload is ' + progress + '% done');
//     switch (snapshot.state) {
//       case 'paused':
//         console.log('Upload is paused');
//         break;
//       case 'running':
//         console.log('Upload is running');
//         break;
//     }
//   },
//   (error) => {
//     // Handle unsuccessful uploads
//   },
//   () => {
//     // Handle successful uploads on complete
//     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
//     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//       console.log('File available at', downloadURL);
//     });
//   }
// );
