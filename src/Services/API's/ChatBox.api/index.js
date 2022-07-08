// Firebase Initialization
import { initializeApp } from 'firebase/app';

// Firebase Database
import { getDatabase, ref, push, onValue } from 'firebase/database';

export const DB = getDatabase();

export const messageSender = ({ msg, user_id }) => {
    console.log(user_id);
    push(ref(DB, 'Messages'), { msg, user_id })
        .then( res => console.log(res) )
        .catch( err => console.log(err) )
}

export const allMessages = () => {
    let messages = [];
    onValue(ref(DB, 'Messages'), (snapshot) => {
        const msg = [];
        snapshot.forEach( childSnapshot => msg.push({ id: childSnapshot.key, ...childSnapshot.val() }) )
        // messages = msg;
    } )

    console.log(messages)
}
