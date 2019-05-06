export const registerUser = (emailSignIn, passwordSignIn) => {
  return firebase.auth().createUserWithEmailAndPassword(emailSignIn, passwordSignIn)
};

// export const checkEmail = () => {
//   return firebase.auth().currentUser.sendEmailVerification();
// };

export const loginUser = (emailLogIn, passwordLogIn) => {
  return firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn)
};

export const firestore = () =>{
  return firebase.firestore();
}

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

export const unsuscribe = (showProfile) =>{
  return firebase.auth().onAuthStateChanged((u2) => {
    if (u2) {
      showProfile(u2)
    }
    unsuscribe()
  });
} 