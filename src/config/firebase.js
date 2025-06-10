// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf3IdZY7CmLCFdHWvC85b_tfthFkInbsA",
  authDomain: "contact-app-154d6.firebaseapp.com",
  projectId: "contact-app-154d6",
  storageBucket: "contact-app-154d6.firebasestorage.app",
  messagingSenderId: "721186786040",
  appId: "1:721186786040:web:f3010613d6e5967223490d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);