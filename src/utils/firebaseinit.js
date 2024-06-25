// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC92qCxu4xs4XinIAyFd9vP7P27atCgXH0',
  authDomain: 'the-eye-66e7b.firebaseapp.com',
  projectId: 'the-eye-66e7b',
  storageBucket: 'the-eye-66e7b.appspot.com',
  messagingSenderId: '173688336832',
  appId: '1:173688336832:web:d5fd30867b42502c255825',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export default app;
export { db, auth, storage };
