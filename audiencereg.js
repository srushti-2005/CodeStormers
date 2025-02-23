
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyD2ACYtYiHoKmwq2j1Xo502D9Bl_0wGiYw",
    authDomain: "comedyhub-ec416.firebaseapp.com",
    projectId: "comedyhub-ec416",
    storageBucket: "comedyhub-ec416.appspot.com",
    messagingSenderId: "817016376852",
    appId: "1:817016376852:web:a969a4520b5a3f78396101"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


document.getElementById("signupForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value; 

    
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    try {
        
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user);
        console.log(user.uid)

        
        await setDoc(doc(db, "users", user.uid), {
            email: email
        });

        alert("Account created successfully!");
        window.location.href = "audiencelogin.html"; 
    } catch (error) {
        console.error("Firebase Error:", error);
        alert("Error: " + error.message);
    }
});
