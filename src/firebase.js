
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC82ltwaXfS0fv-IGL3pUi9H16Yer5OTYo",
  authDomain: "anime-chat-hub.firebaseapp.com",
  projectId: "anime-chat-hub",
  storageBucket: "anime-chat-hub.appspot.com",
  messagingSenderId: "400154663006",
  appId: "1:400154663006:web:3827717f7130a96de1bccf",
  measurementId: "G-669GG3N90P"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()