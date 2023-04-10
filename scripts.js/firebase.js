// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import { 
    getFirestore, 
    collection, 
    addDoc,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";
import * as _ from 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuirm07AF9CtdjpJWHpekQLCzjN3EcmeE",
    authDomain: "jpaulrez-9f050.firebaseapp.com",
    projectId: "jpaulrez-9f050",
    storageBucket: "jpaulrez-9f050.appspot.com",
    messagingSenderId: "161919607642",
    appId: "1:161919607642:web:a94d2b3f6d7dde8261c963",
    measurementId: "G-XDQH13H9DQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();

export const saveTask = (name, lastname, email, whatsapp, limitation, category) => 
    addDoc(collection(db, 'tasks'), {name, lastname, email, whatsapp, limitation, category});