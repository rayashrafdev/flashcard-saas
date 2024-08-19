// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGNYRI-MVRecNmwaHO17oP3wwdOQHPqCU",
  authDomain: "flashcard-saa.firebaseapp.com",
  projectId: "flashcard-saa",
  storageBucket: "flashcard-saa.appspot.com",
  messagingSenderId: "552311616754",
  appId: "1:552311616754:web:e996e2c2a7116174038c6b",
  measurementId: "G-FBRF8G8MGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}