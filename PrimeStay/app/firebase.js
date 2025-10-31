import { initializeApp, getApps } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyD7U7vmnjPJ3TdR8d12HXU0Qqw5DkiHVQg",
  authDomain: "primestay-2fbb4.firebaseapp.com",
  projectId: "primestay-2fbb4",
  storageBucket: "primestay-2fbb4.firebasestorage.app",
  messagingSenderId: "776756911395",
  appId: "1:776756911395:web:5e791bcd76685c2d1b8096"
};

// Initialize Firebase
let app;
let auth;

try {
  if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage)
    });
  } else {
    app = getApps()[0];
    auth = getAuth(app);
  }
} catch (error) {
  console.log("Error initializing app:", error);
}

export { auth };
export default auth;