 
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClV8qA5XkLa-BwOWARejTghO_ROHI-d-8",
  authDomain: "chat-cf42d.firebaseapp.com",
  projectId: "chat-cf42d",
  storageBucket: "chat-cf42d.appspot.com",
  messagingSenderId: "556746218235",
  appId: "1:556746218235:web:418d7bfdc90a8ddcc6ee5e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()