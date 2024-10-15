import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDmoQY45mXzkKc-g7RhKd0pEXu-Lvej9Lg",
    authDomain: "chatapp-e0f74.firebaseapp.com",
    projectId: "chatapp-e0f74",
    storageBucket: "chatapp-e0f74.appspot.com",
    messagingSenderId: "134506743320",
    appId: "1:134506743320:web:4815da4efacde8ac5ba56d",
    measurementId: "G-24Y9SXB1FN"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);