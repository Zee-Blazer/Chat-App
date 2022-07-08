// Firebase Initialization
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../../firebase-config";

initializeApp(firebaseConfig);

// Firebase Authentication Initialization
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Firebase Database Initialization
import { getDatabase, ref, push } from "firebase/database";

const auth = getAuth();

export const DB = getDatabase();

export const ManageUsers = ({ username, email, user_id }) => {

    push(ref(DB, "Users"), {
        username,
        email,
        user_id
    })
}



// import React from 'react';

// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { getDatabase, ref, push } from 'firebase/database';

// export const DB = getDatabase(); 

// const auth = getAuth();

// const necessaryInfo = (email, ID, username) => {

//     push(ref( DB, "User" ), {ID, username})
//     .then( res => console.log(res) )
    
//     // DB.ref("User").push({ ID, username })
//     // .then( res => {

//     //     DB.ref("DB-Details").push({ email, ID })
//     // } )
//     // .catch( e => console.log(e) )

// };

// export const SignupApi = (email, pwd, setUser, setIsLoading, username) => {
//     createUserWithEmailAndPassword(auth, email, pwd)
//         .then( user => {
            
//             setIsLoading(false);
//             const ID = user.user.uid;

//             // necessaryInfo(email, ID, username)

//             setUser(user);

//         } )
//         .catch( err => {
//             alert(err);
//             setIsLoading(false);
//         } );
// }
