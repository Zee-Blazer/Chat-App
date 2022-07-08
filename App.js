import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config';

// Import the container navigation;
import { Navigation } from './src/Infrastructure/Navigation';
import { AuthContextProvider } from './src/Services/Authentication/auth.context';

// Firebase initialization.
// import { initializeApp } from 'firebase/app';
// import { firebaseConfig } from './firebase-config';
// import firebase from 'firebase/compat/app';

export default function App() {


  // Firebase config
//   const firebaseConfig = {
//   apiKey: "AIzaSyCRezWYl_fBb3unFiYs0xtJmTK7heHXjA0",
//   authDomain: "chat-app-nigeria.firebaseapp.com",
//   databaseURL: "https://chat-app-nigeria-default-rtdb.firebaseio.com",
//   projectId: "chat-app-nigeria",
//   storageBucket: "chat-app-nigeria.appspot.com",
//   messagingSenderId: "123533732518",
//   appId: "1:123533732518:web:1ea6b74d0704c66f172267",
//   measurementId: "G-Z942D5NQ0T"
// };

  // Checking if Firebase has been initialized
  // if(!firebase.apps.length){
  //   firebase.initializeApp(firebaseConfig);
  // }
  // else{
  //   firebase.app();
  // }

  initializeApp(firebaseConfig);

  return (
    <>

      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
      
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
