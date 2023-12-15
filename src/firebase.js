 
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
 
const firebaseConfig = {
  apiKey: "AIzaSyClV8qA5XkLa-BwOWARejTghO_ROHI-d-8",
  authDomain: "chat-cf42d.firebaseapp.com",
  databaseURL: "https://chat-cf42d-default-rtdb.firebaseio.com",
  projectId: "chat-cf42d",
  storageBucket: "chat-cf42d.appspot.com",
  messagingSenderId: "556746218235",
  appId: "1:556746218235:web:418d7bfdc90a8ddcc6ee5e"
};

 
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()