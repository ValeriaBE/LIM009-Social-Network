
export const registerUser = (emailSignIn, passwordSignIn) => {
  return firebase.auth().createUserWithEmailAndPassword(emailSignIn, passwordSignIn)
};

export const checkEmail = () => {
  return firebase.auth().currentUser.sendEmailVerification();
};

export const loginUser = (emailLogIn, passwordLogIn) => {
  return firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn)
};


export const activeUser = (fnshowActUser, fnpantalla) => {
  return firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      fnshowActUser(user);
    }else{
      fnpantalla();
}});
};


export const exit = () => {
  return firebase.auth().signOut()
};

export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
};

export const loginFacebook = () => {
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
};