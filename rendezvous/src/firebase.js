
// src/firebase.js

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2r1XiyZR8OtUMgMnMtQFCm8-6gIf_prg",
    authDomain: "cs194w-62f48.firebaseapp.com",
    databaseURL: "https://cs194w-62f48.firebaseio.com",
    projectId: "cs194w-62f48",
    storageBucket: "cs194w-62f48.appspot.com",
    messagingSenderId: "824398397579",
    appId: "1:824398397579:web:f46f42bd79762b567bd48e",
    measurementId: "G-6ZZS6VENPH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
