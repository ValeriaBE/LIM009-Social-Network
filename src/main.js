// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();
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
// const bigOne = document.getElementById('bigOne');
// const dbRef = firebase.database().ref().child('text');
// dbRef.on('value', snap => bigOne.innerText = snap.val());

let firestore= firebase.firestore();
// const docRef =firestore.doc('Registro/Cuentas');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const acceder = document.getElementById('acceder');
// acceder.addEventListener('click', ()=>{
//     const textToSave = email.value;
//     const passtoSave = password.value;
//     console.log('I am going to save '+ textToSave + ' to firestore');
//     docRef.set({
//         Contraseña: passtoSave,
//         Correo: textToSave
//     }).then( ()=>{
//         console.log('Status saved!');
//     }).catch((error)=>{
//         console.log('Got an error!', error);
//     })
// });

// const correo = document.getElementById('correo');
// const getRealtimeUpdates = () =>{
//     docRef.onSnapshot((doc)=>{
//         if(doc && doc.exists){
//             const myData = doc.data();
//             correo.innerHTML=myData.Correos;
//         }
//     })
// };
// getRealtimeUpdates();

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