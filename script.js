import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

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

// Function to switch screens
function showSection(id) {
    document.getElementById('signup-section').style.display = 'none';
    document.getElementById('setup-section').style.display = 'none';
    document.getElementById('dashboard-section').style.display = 'none';
    document.getElementById(id).style.display = 'block';
}

// Signup Logic
document.getElementById('signupBtn').addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account Created!");
        showSection('setup-section');
    } catch (e) { alert(e.message); }
});

// Save Profile Logic
document.getElementById('saveProfile').addEventListener('click', async () => {
    await addDoc(collection(db, "artists"), {
        userId: auth.currentUser.uid,
        name: document.getElementById('name').value,
        role: document.getElementById('role').value,
        wa: document.getElementById('wa').value
    });
    alert("Profile Saved!");
    loadArtists();
    showSection('dashboard-section');
});

// Load Data
async function loadArtists() {
    const snapshot = await getDocs(collection(db, "artists"));
    const list = document.getElementById('artistList');
    list.innerHTML = "";
    snapshot.forEach(doc => {
        const d = doc.data();
        list.innerHTML += `<div class="card"><b>${d.name}</b><br>${d.role}</div>`;
    });
}
