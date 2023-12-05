// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDxkr8vJW5tvKt0fFXlqgo2R1PH8MVVqE",
  authDomain: "saude-na-hora-certa.firebaseapp.com",
  projectId: "saude-na-hora-certa",
  storageBucket: "saude-na-hora-certa.appspot.com",
  messagingSenderId: "148881489100",
  appId: "1:148881489100:web:9151a39c86674edc5fd669",
  measurementId: "G-YPJEWJYD62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
