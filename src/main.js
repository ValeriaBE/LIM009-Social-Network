
// // contacts.readonly
// const signInSg = () => {
//     if(!firebase.auth().currentUser){
//         let providerSg = new firebase.auth.GoogleAuthProvider();
//         providerSg.addScope('https://www.googleapis.com/auth/plus.login');
    
//         firebase.auth().signInWithPopup(providerSg)
//         .then((result) => {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         var token = result.credential.accessToken;
//         // The signed-in user info.
//         var user = result.user;
//         // ...
//         console.log(user);
//     })
//     .catch((error) => {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // The email of the user's account used.
//         var email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         var credential = error.credential;
//         // ...
//         if(errorCode === 'auth/account-exists-with-different-credential'){
//             alert('Es el mismo usuario')
//         }
//     });
// }    else {
//     firebase.auth().signOut();
//     }
// }

//Este es el punto de entrada de tu aplicacion
import { funcRegister, activeUser, showContent, funcGoogle,funcLogin} from './lib/index.js';
import { screen1 } from './lib/Content.js';
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

window.onload = screen1();

export const registerView = () => {
  const buttonRegisterEmail = document.getElementById('send');
  const emailSignIn = document.getElementById('email-signup');
  const passwordSignIn = document.getElementById('password-signup');

  buttonRegisterEmail.addEventListener('click', (event) => {
    event.preventDefault();
    funcRegister(emailSignIn.value, passwordSignIn.value);
  });
}

const buttonLogInEmail = document.getElementById('login-btn');
const emailLogInEmail = document.getElementById('email-login');
const passwordLogInEmail = document.getElementById('password-login');
buttonLogInEmail.addEventListener('click', (event) => {
  event.preventDefault();
  funcLogin(emailLogInEmail.value, passwordLogInEmail.value);
});
activeUser();


