// Firebase Initialization
import { initializeApp } from 'firebase/app';

// Firebase Database
import { getDatabase, ref, push, onValue } from 'firebase/database';

export const DB = getDatabase();

export const messageSender = ({ msg, user_id }) => {
    console.log(user_id, `This is working...`, msg);
    push(ref(DB, 'Chats'), { messages: { msg, id: user_id }, user_id })
        .then( res => {} )
        .catch( err => {} )
}

export const allMessages = (setMessages) => {
    console.log("Hello World")
    onValue(ref(DB, 'Chats'), (snapshot) => {
        const msg = [];
        snapshot.forEach( childSnapshot => msg.push({ 
            id: childSnapshot.key, ...childSnapshot.val()
        }) )
        setMessages(msg);
    } )
}
