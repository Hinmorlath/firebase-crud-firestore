// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw5aJuiAR1PhdlQQb8ZNf1pghWpGBA9Z4",
  authDomain: "fir-javascript-crud-9bf3c.firebaseapp.com",
  projectId: "fir-javascript-crud-9bf3c",
  storageBucket: "fir-javascript-crud-9bf3c.appspot.com",
  messagingSenderId: "997217852817",
  appId: "1:997217852817:web:3de031f519ea3cc1d04e30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export const saveTask = (title, description) => 
  addDoc(collection(db, 'tasks'), {title, description});

export const getTasks = () => getDocs(collection(db, 'tasks'))

export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback)