import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzs0h6TiNfULqltb-2P9MS-kXgfEtIxv0",
  authDomain: "superchat-853f6.firebaseapp.com",
  projectId: "superchat-853f6",
  storageBucket: "superchat-853f6.appspot.com",
  messagingSenderId: "836390018569",
  appId: "1:836390018569:web:7ad948b5893a071deca2d8",
  measurementId: "G-582S45MGQ0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { auth, db };
