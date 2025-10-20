// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
let app
if(firebase.app.lenght === 0) {
app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}
const auth = firebase.auth()
export {auth}