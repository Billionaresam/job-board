// Import Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-analytics.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCt3xTz9HkuzdMo0VYge27TQn3xIeZJo94",
    authDomain: "articleweb-368f7.firebaseapp.com",
    projectId: "articleweb-368f7",
    storageBucket: "articleweb-368f7.firebasestorage.app",
    messagingSenderId: "199396223708",
    appId: "1:199396223708:web:8457b73ed90e6ecad1a219",
    measurementId: "G-T96GNQX29S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
