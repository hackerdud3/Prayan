// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKeGq0y6Usw2__XXaT88to3HZuc2eIEvo",
  authDomain: "prayan-38184.firebaseapp.com",
  projectId: "prayan-38184",
  storageBucket: "prayan-38184.appspot.com",
  messagingSenderId: "913235082840",
  appId: "1:913235082840:web:f1380f262ea699491b142d",
  measurementId: "G-GXXJTRS3Y5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
