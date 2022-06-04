import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkkcChJpVa3cNHcr6XarkzTfM0c2QqGzQ",
  authDomain: "my-prj2-8aba6.firebaseapp.com",
  projectId: "my-prj2-8aba6",
  storageBucket: "my-prj2-8aba6.appspot.com",
  messagingSenderId: "207772196375",
  appId: "1:207772196375:web:ce95cb646cc254c59b8652",
  measurementId: "G-5G8WT9RM9F",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// npm install -g firebase-tools
