// Import Firebase dependencies
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKh2j57-1GUviFMXNG1EyfjymOp5y1HqA",
  authDomain: "project-3c664.firebaseapp.com",
  projectId: "project-3c664",
  storageBucket: "project-3c664.firebasestorage.app",
  messagingSenderId: "474827984499",
  appId: "1:474827984499:web:58a865c04e8df6d1a1e406"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Toggle password visibility
window.togglePassword = (inputId) => {
  const input = document.getElementById(inputId);
  input.type = input.type === "password" ? "text" : "password";
};

// Handle user signup
window.handleSignup = async () => {
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save additional user info in Firestore
    await setDoc(doc(db, "users", user.uid), {
      name: name,
      email: email,
      createdAt: new Date().toISOString(),
    });

    alert("Account created successfully!");
    closeSignup();
  } catch (error) {
    alert(`Signup failed: ${error.message}`);
  }
};

// Handle user login
window.handleLogin = async () => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
    // Redirect to the dashboard or another page if needed
  } catch (error) {
    alert(`Login failed: ${error.message}`);
  }
};

// Show signup modal
window.showSignup = () => {
  document.getElementById("signup-section").style.display = "block";
  document.querySelector(".container").style.display = "none";
};

// Close signup modal and show login
window.closeSignup = () => {
  document.getElementById("signup-section").style.display = "none";
  document.querySelector(".container").style.display = "flex";
};
