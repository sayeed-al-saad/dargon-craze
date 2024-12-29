// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCubDjfUmmdezKIB-WVkGVByp8JixrJsnE",
  authDomain: "dragon-craze.firebaseapp.com",
  projectId: "dragon-craze",
  storageBucket: "dragon-craze.firebasestorage.app",
  messagingSenderId: "795701731591",
  appId: "1:795701731591:web:dc58c9398801754b76a5a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;