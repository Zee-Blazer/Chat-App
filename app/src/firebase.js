import * as firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCRezWYl_fBb3unFiYs0xtJmTK7heHXjA0",
  authDomain: "chat-app-nigeria.firebaseapp.com",
  databaseURL: "https://chat-app-nigeria-default-rtdb.firebaseio.com",
  projectId: "chat-app-nigeria",
  storageBucket: "chat-app-nigeria.appspot.com",
  messagingSenderId: "123533732518",
  appId: "1:123533732518:web:1ea6b74d0704c66f172267",
  measurementId: "G-Z942D5NQ0T"
};

// Initialize Firebase
let app;

if(firebase.apps.length === 0)
{
    app = firebase.initializeApp(firebaseConfig);
}
else {
    firebase.app();
}
