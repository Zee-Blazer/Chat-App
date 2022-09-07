import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config';

// Import the container navigation;
import { Navigation } from './src/Infrastructure/Navigation';
import { AuthContextProvider } from './src/Services/Authentication/auth.context';


export default function App() {

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
