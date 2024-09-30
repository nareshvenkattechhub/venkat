// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcRGHBVkSbbr-3lLY69oyi9e_vdNVyYx0",
  authDomain: "venkats-24aba.firebaseapp.com",
  projectId: "venkats-24aba",
  storageBucket: "venkats-24aba.appspot.com",
  messagingSenderId: "137345662272",
  appId: "1:137345662272:web:07073430b3e7e439354ea5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

export default app;
