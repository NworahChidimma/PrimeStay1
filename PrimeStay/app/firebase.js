// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7U7vmnjPJ3TdR8d12HXU0Qqw5DkiHVQg",
  authDomain: "primestay-2fbb4.firebaseapp.com",
  projectId: "primestay-2fbb4",
  storageBucket: "primestay-2fbb4.firebasestorage.app",
  messagingSenderId: "776756911395",
  appId: "1:776756911395:web:5e791bcd76685c2d1b8096"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export default auth;