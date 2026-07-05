import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBWvb_FV_-QtKHtPgl6yvkcQaN42_zf8xk",
  authDomain: "surconnect-438be.firebaseapp.com",
  projectId: "surconnect-438be",
  storageBucket: "surconnect-438be.firebasestorage.app",
  messagingSenderId: "540534889209",
  appId: "1:540534889209:web:3b21455d15472e7f7fe028"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

window.auth = auth;
window.db = db;
window.provider = provider;

console.log("✅ Firebase Connected Successfully");
