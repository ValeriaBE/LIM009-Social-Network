export const registerUser = (emailSignIn, passwordSignIn) => {
  return firebase.auth().createUserWithEmailAndPassword(emailSignIn, passwordSignIn)
};

// export const registerUserinFirestore = (username, email)=>{
//   firebase.firestore().collection('Users').add({
//       name: username,
//       email: email
//   });
// }

// export const gettingData = () =>{
//   firebase.firestore().collection('Users').get().then(snapshot => {
//       snapshot.docs.forEach(doc => {
//           renderCafe(doc);
//       });
//   });
  
// }

export const checkEmail = () => {
  return firebase.auth().currentUser.sendEmailVerification();
};

export const loginUser = (emailLogIn, passwordLogIn) => {
  return firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn)
};

export const activeUser = (changeRoute) => {
  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      changeRoute('#/profile');
    } else {
      changeRoute('#/home');
    }
  });
};

export const getUser = () => {
  return firebase.auth().currentUser;
}

export const exit = () => {
  return firebase.auth().signOut()
};

export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
};

export const loginFacebook = () => {
  var provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider)
};