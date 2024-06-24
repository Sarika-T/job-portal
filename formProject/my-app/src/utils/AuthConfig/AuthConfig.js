// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBNDE7fCLojpzDw9OchsgtbCRCjYjD24wQ",
  authDomain: "job-portal-f34a7.firebaseapp.com",
  projectId: "job-portal-f34a7",
  storageBucket: "job-portal-f34a7.appspot.com",
  messagingSenderId: "646624137759",
  appId: "1:646624137759:web:dc25536faa8fb7a0813b2a",
  measurementId: "G-K44L7F48TW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); 
