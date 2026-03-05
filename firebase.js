// ============================================================
// firebase.js — Firebase Initialization for BoostifyX
// Handles Authentication + Firestore Database
// ============================================================

// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ============================================================
// Firebase Configuration
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyD3cuMK2FpiaaqppnX0EcyojscXqDL1wV8",
  authDomain: "boostifyx-9d728.firebaseapp.com",
  projectId: "boostifyx-9d728",
  storageBucket: "boostifyx-9d728.firebasestorage.app",
  messagingSenderId: "34541851556",
  appId: "1:34541851556:web:69ef869a8fe730af37a731"
};

// ============================================================
// Initialize Firebase
// ============================================================

const app = initializeApp(firebaseConfig);

// ============================================================
// Initialize Services
// ============================================================

const auth = getAuth(app);
const db = getFirestore(app);

// ============================================================
// Export services so other files can use them
// ============================================================

export { auth, db };