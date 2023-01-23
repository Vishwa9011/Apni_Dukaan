// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyAHv0zp7UUFXU36nuG3PegUamBYbZZ80mA",
     authDomain: "apnidukaan-9a863.firebaseapp.com",
     projectId: "apnidukaan-9a863",
     storageBucket: "apnidukaan-9a863.appspot.com",
     messagingSenderId: "1005134738381",
     appId: "1:1005134738381:web:546d4512feba54b0b9ca84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)
export const provider = new GoogleAuthProvider();