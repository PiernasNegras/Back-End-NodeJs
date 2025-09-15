import 'dotenv/config';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig ={
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId:"back-end-7b8a9",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

// Inicializa Firebase.
const app = initializeApp(firebaseConfig);

// Inicializa Firestore.
const db = getFirestore(app);

// Exporto la conexion con la db.
export {db};