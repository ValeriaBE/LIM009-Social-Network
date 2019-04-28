
import { cerrarSesion } from './Content.js';

const signOut = () => firebase.auth().signOut();

export const funcRegister = (emailSignIn, passwordSignIn) => {
  firebase.auth().createUserWithEmailAndPassword(emailSignIn, passwordSignIn)
};

export const funcLogin = (emailLogIn, passwordLogIn) => {
  firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn)
};


export const activeUser = () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log("usuario logeado")
      showContent(user);
    } else {
      console.log("usuario no logeado")
    }
  });
};

export const showContent = user => {
  if (user) {
    cerrarSesion();
  }
  const buttonLogOut = document.getElementById('buttonLogOut');
  buttonLogOut.addEventListener('click', signOut);
};

export const funcGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    console.log(result);
  }).catch((error) =>{
    console.log(error);
  });
};

export const funcFacebook = () => {
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    console.log(result);
  }).catch((error) =>{
    console.log(error);
  });
};

export const funcFacebookSignout = () => {
  firebase.auth().signOut().then((result) => {
    console.log('exito' + result);
  }).catch((error) => {
    console.log(error);

  });
}


