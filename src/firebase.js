// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "obbinahportifolio.firebaseapp.com",
  projectId: "obbinahportifolio",
  storageBucket: "obbinahportifolio.appspot.com",
  messagingSenderId: "369659590598",
  appId: "1:369659590598:web:bbde60b6ed1163673fe4c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
