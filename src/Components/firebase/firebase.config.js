// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFqCQL3s81CbV5F0qDzLDKmOP9PIOf89E",
  authDomain: "coffee-store-cfc19.firebaseapp.com",
  projectId: "coffee-store-cfc19",
  storageBucket: "coffee-store-cfc19.firebasestorage.app",
  messagingSenderId: "514267097643",
  appId: "1:514267097643:web:917099b16d00d6a634d86e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app