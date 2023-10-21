// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3NZpBmjq6AiJ8o018PgC-aGdPh-vOFhM",
  authDomain: "cargo-connect-3a5a9.firebaseapp.com",
  projectId: "cargo-connect-3a5a9",
  storageBucket: "cargo-connect-3a5a9.appspot.com",
  messagingSenderId: "499807519341",
  appId: "1:499807519341:web:05cb6056ab1121f6553564",
  measurementId: "G-HZKKWKL49Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); 
const firestore = getFirestore();

export { auth, firestore };