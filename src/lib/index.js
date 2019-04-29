import {
  showActUser,
  screen1
} from './Content.js';

export const registerUser = (emailSignIn, passwordSignIn) => {
  firebase.auth().createUserWithEmailAndPassword(emailSignIn, passwordSignIn)
    .then((result) => {
      checkEmail();
      console.log(result);
    })
};

export const checkEmail = () => {
  let user = firebase.auth().currentUser;

  user.sendEmailVerification()
    .then(() => {
      // Email sent.
      console.log('Enviando correo...')
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
};

export const loginUser = (emailLogIn, passwordLogIn) => {
  return firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn)
};


export const activeUser = () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log("usuario logeado")
      showActUser(user);
    } else {
      console.log("usuario no logeado")
    }
  });
};


export const exit = () => {
  firebase.auth().signOut()
    .then(() => {
      console.log('Saliendo...')
      screen1();
    })
    .catch((error) => {
      console.log(error);
    })
};

export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      console.log(result.user);
    }).catch((error) => {
      console.log(error);
    });
};

export const loginFacebook = () => {
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });
};