
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAjioE-bCFkEiRkwVSEqXrQUYwt4Ja9J9Y",
    authDomain: "portfolio-95501.firebaseapp.com",
    projectId: "portfolio-95501",
    storageBucket: "portfolio-95501.appspot.com",
    messagingSenderId: "1055150121886",
    appId: "1:1055150121886:web:3f2c5e55b87c48bc0e2c8f",
    measurementId: "G-ZNPJ74JY4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const db=getFirestore(app);