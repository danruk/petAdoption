// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "startups-f7d8e.firebaseapp.com",
  projectId: "startups-f7d8e",
  storageBucket: "startups-f7d8e.firebasestorage.app",
  messagingSenderId: "732304139513",
  appId: "1:732304139513:web:1952ae43c6c60569266e28",
  measurementId: "G-FKYXWM129Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
//const analytics = getAnalytics(app);