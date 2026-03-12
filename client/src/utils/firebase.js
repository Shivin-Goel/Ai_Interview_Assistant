
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-27381.firebaseapp.com",
  projectId: "interviewiq-27381",
  storageBucket: "interviewiq-27381.firebasestorage.app",
  messagingSenderId: "5816310360",
  appId: "1:5816310360:web:931797751d33294f88c82d"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {auth , provider };