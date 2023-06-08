//import * as firebase from 'firebase';

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDvLRF3cRtVc1naD6B9985MGkzZcDlUMgw",
  authDomain: "cupfull-8fabb.firebaseapp.com",
  projectId: "cupfull-8fabb",
  storageBucket: "cupfull-8fabb.appspot.com",
  messagingSenderId: "240225121738",
  appId: "1:240225121738:web:3591e14d3b76003bf68b33",
  measurementId: "G-0X3H650R13",

  //database information
  databaseURL: 'https://cupfull-8fabb-default-rtdb.firebaseio.com/'
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
const authentication = getAuth(app);

export {authentication};