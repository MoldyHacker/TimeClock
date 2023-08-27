// import { boot } from 'quasar/wrappers'
//
// // "async" is optional;
// // more info on params: https://v2.quasar.dev/quasar-cli/boot-files
// export default boot(async (/* { app, router, ... } */) => {
//   // something to do
// })

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQEih3I4WgNKk_lTeU0XzIv_6nasly1aY",
  authDomain: "time-scheduler-7efe9.firebaseapp.com",
  projectId: "time-scheduler-7efe9",
  storageBucket: "time-scheduler-7efe9.appspot.com",
  messagingSenderId: "276093801633",
  appId: "1:276093801633:web:86587c12e25b1cd0b98ce0",
  measurementId: "G-FFQGQQ7SHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db, analytics }
