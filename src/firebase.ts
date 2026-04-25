import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaHjElz3aEQGxiblrn3DuSphacwTukkFM",
  authDomain: "educonnect-90d0c.firebaseapp.com",
  projectId: "educonnect-90d0c",
  storageBucket: "educonnect-90d0c.firebasestorage.app",
  messagingSenderId: "141274281450",
  appId: "1:141274281450:web:eb6723118215f695716e93",
  measurementId: "G-LF2BYEVG2J"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

