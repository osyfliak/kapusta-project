// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlan63PV8GnqUnpuUdxA0b0nCDzd9k_GU",
  authDomain: "kapusta-633a2.firebaseapp.com",
  projectId: "kapusta-633a2",
  storageBucket: "kapusta-633a2.appspot.com",
  messagingSenderId: "383287977399",
  appId: "1:383287977399:web:952cdcd453581efc567432"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);