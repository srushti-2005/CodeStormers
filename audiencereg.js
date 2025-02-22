 // Import Firebase SDK
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
 import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

 // Firebase Configuration (Replace with your actual Firebase credentials)
 const firebaseConfig = {
     apiKey: "AIzaSyD2ACYtYiHoKmwq2j1Xo502D9Bl_0wGiYw",
     authDomain: "comedyhub-ec416.firebaseapp.com",
     projectId: "comedyhub-ec416",
     storageBucket: "comedyhub-ec416.appspot.com",
     messagingSenderId: "817016376852",
     appId: "1:817016376852:web:a969a4520b5a3f78396101"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 
 

 const submit = document.getElementById('submit');
 submit.addEventListener("click", function(event){
    event.preventDefault()

    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Account created successfully!");
            window.location.href= "audience.login";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});