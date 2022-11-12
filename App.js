
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
{/* import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js"; */ }
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional 
const firebaseConfig = {
  apiKey: "AIzaSyBeaRVWY6S6pHAKkMo-cOGa0CIPcbNdAKw",
  authDomain: "hackathon-sarfraz.firebaseapp.com",
  projectId: "hackathon-sarfraz",
  storageBucket: "hackathon-sarfraz.appspot.com",
  messagingSenderId: "81296017443",
  appId: "1:81296017443:web:7829bb40eaec6240054996",
  measurementId: "G-3HM8HZEWFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth();


let login = document.getElementById("Login")

login.addEventlistener ("click",()=>{
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
    });


})
