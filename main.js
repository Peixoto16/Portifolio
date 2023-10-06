// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, ref, set, get, child} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyA1kf6mPQQFAOBTCIkN40IttVoLa-InP0g",
authDomain: "contactform-64813.firebaseapp.com",
databaseURL: "https://contactform-64813-default-rtdb.firebaseio.com",
projectId: "contactform-64813",
storageBucket: "contactform-64813.appspot.com",
messagingSenderId: "899969038176",
appId: "1:899969038176:web:e023e1a115ae2c22cd5005"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//get ref to database services
const db = getDatabase(app);

document.getElementById("submit").addEventListener("click", function(e){
e.preventDefault();

    const usernameValue = document.getElementById("username").value;
    const emailValue = document.getElementById("email").value;

    // Verifique se os campos obrigatórios (nome e email) estão preenchidos
    if (!usernameValue || !emailValue) {
        alert("Por favor, preencha os campos de nome e email.");
        return; // Não envie os dados se os campos estiverem vazios
    }

    set(ref(db, 'user/' + document.getElementById("username").value), 
    {
        username: usernameValue,
        email: emailValue,
        PhoneNumber: document.getElementById("phone").value,
        msg: document.getElementById("msg").value
    });

    document.getElementById("username").value ="",
    document.getElementById("email").value ="",
    document.getElementById("phone").value ="",
    document.getElementById("msg").value =""
        
    alert("Dados Enviados");
});

