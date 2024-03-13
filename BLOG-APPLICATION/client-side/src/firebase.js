// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "blog-application-447c0.firebaseapp.com",
  projectId: "blog-application-447c0",
  storageBucket: "blog-application-447c0.appspot.com",
  messagingSenderId: "800052611695",
  appId: "1:800052611695:web:d937a82346ca3a34d4db9a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
