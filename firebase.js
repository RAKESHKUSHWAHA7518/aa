// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB93MmkVFyjhdS0GwJtTYQHY0l1aqgJLS4",
  authDomain: "imagegen-becce.firebaseapp.com",
  projectId: "imagegen-becce",
  storageBucket: "imagegen-becce.appspot.com",
  messagingSenderId: "986146441200",
  appId: "1:986146441200:web:70b31a096e89c1d5973f35",
  measurementId: "G-CN235MC6JE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);