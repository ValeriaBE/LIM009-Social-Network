// // Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();
const registro = document.getElementById('registrate');
const container = document.getElementById('container');
registro.addEventListener('click', () =>{
let string = `
<div>
   <p>Tu nombre</p>
   <input type="text" name="" id="nombre"></input>
   <p>Tu correo</p>
   <input type="email" name="" id="email"></input>
   <p>Tu contraseña</p>
   <input type="password" name="" id="password"></input>
   <button>Registrarse</button>
</div>
`;
return container.innerHTML = string;
})
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDPcLn-Y_IDzZB_cNjVFPMiZ3LP_AbLKGc",
    authDomain: "social-network-f8d4d.firebaseapp.com",
    databaseURL: "https://social-network-f8d4d.firebaseio.com",
    projectId: "social-network-f8d4d",
    storageBucket: "social-network-f8d4d.appspot.com",
    messagingSenderId: "815925731144"
  };
  firebase.initializeApp(config);
let firestore= firebase.firestore();
const form = document.getElementById('add-profile');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    firestore.collection('Registro').add({
        correo: form.email.value,
        contraseña: form.password.value
    });
    form.email.value='';
    form.password.value='';
})

const showContent = user => {
    const content = document.getElementById('content')
    if (user.emailVerified) {
        const string = `
    <p>Welcome</p>
    <button id="buttonLogOut">Cerrar sesión</button>`
        const div = document.createElement('div')
        div.innerHTML = string
        content.appendChild(div)
    }

const onSignIn=(googleUser) =>{
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); 
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); 
      }
const SignIn = document.getElementById('Signin');
SignIn.addEventListener('click',onSignIn)};
