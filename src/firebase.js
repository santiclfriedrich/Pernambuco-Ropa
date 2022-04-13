// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkrbtr4M0saRZ3_9BeJ5_IKFIAar_MqQk",
  authDomain: "ecommerce-pernambuco.firebaseapp.com",
  projectId: "ecommerce-pernambuco",
  storageBucket: "ecommerce-pernambuco.appspot.com",
  messagingSenderId: "1010541185282",
  appId: "1:1010541185282:web:747468943251ffbe96da1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db