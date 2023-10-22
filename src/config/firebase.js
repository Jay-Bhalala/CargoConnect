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
  apiKey: "AIzaSyCD3W7a6zjKjQyhmoWn3_1bplxTFKTOSLc",
  authDomain: "cargo-connect-2.firebaseapp.com",
  projectId: "cargo-connect-2",
  storageBucket: "cargo-connect-2.appspot.com",
  messagingSenderId: "17434650777",
  appId: "1:17434650777:web:fe6da4841875c423a1f008",
  measurementId: "G-M3DCKM7GZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); 
const db = getFirestore(app);

export { auth, db };