import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
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
const db = getFirestore(app);

// Submit logic
document.getElementById('artistForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "artists"), {
        name: document.getElementById('name').value,
        role: document.getElementById('role').value,
        city: document.getElementById('city').value,
        intro: document.getElementById('intro').value,
        wa: document.getElementById('wa').value
    });
    alert("Profile Published!");
    location.reload();
});

// Load logic
const listDiv = document.getElementById('artistList');
const querySnapshot = await getDocs(collection(db, "artists"));
listDiv.innerHTML = "";
querySnapshot.forEach((doc) => {
    const d = doc.data();
    listDiv.innerHTML += `
        <div class="card">
            <div style="font-weight:bold; font-size:18px;">${d.name}</div>
            <div style="color:#00e676;">${d.role} | ${d.city}</div>
            <p>${d.intro}</p>
            <a href="https://wa.me/${d.wa}" class="btn-wa">WhatsApp Pe Connect Karein</a>
        </div>
    `;
});

