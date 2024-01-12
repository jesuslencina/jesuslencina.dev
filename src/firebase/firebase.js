import { initializeApp } from "firebase/app"

// Importing these variables from the .env will NOT prevent them
// from ending up accessible anyway from the production build.
// But it will at least hide them from this git repository.
// Besides, write access is protected by other means.

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
}

export const app = initializeApp(firebaseConfig)
