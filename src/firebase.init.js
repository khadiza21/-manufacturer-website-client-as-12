
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQBMOPjoug-A_OySdPMMYqjCE_v6iKH4Y",
  authDomain: "manufacturer-website-46972.firebaseapp.com",
  projectId: "manufacturer-website-46972",
  storageBucket: "manufacturer-website-46972.appspot.com",
  messagingSenderId: "571834800453",
  appId: "1:571834800453:web:e36fe65df0898ab8b1862c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;