// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "news-app-10572.firebaseapp.com",
  projectId: "news-app-10572",
  storageBucket: "news-app-10572.appspot.com",
  messagingSenderId: "263301849284",
  appId: "1:263301849284:web:a63c50629c434d0f8e6991",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
