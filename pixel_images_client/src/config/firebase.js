// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYbxFiDzZnf37W33SAcZ-QPvhnVc0VIKY",
  authDomain: "billiondollar-e1473.firebaseapp.com",
  projectId: "billiondollar-e1473",
  storageBucket: "billiondollar-e1473.appspot.com",
  messagingSenderId: "1051331358773",
  appId: "1:1051331358773:web:7c53d0952104578f26c17c",
  measurementId: "G-77LJPX73P0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)