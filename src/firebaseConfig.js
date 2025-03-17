import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database"; // Import Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyDou7F9tO2nnTijtISJf2ec6hhkaxGpjoM",
  authDomain: "foodsaver-cbb5b.firebaseapp.com",
  projectId: "foodsaver-cbb5b",
  storageBucket: "foodsaver-cbb5b.firebasestorage.app",
  messagingSenderId: "921366615176",
  appId: "1:921366615176:web:509db2f362dc7a8c5c7b3d",
  measurementId: "G-479NGKRE2Y",
  databaseURL: "https://foodsaver-cbb5b-default-rtdb.firebaseio.com", // Add the Realtime Database URL
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Realtime Database
export const database = getDatabase(app); // Export Realtime Database
