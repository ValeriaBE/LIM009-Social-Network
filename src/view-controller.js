import {
    registerUser,
    // checkEmail,
    activeUser,
    exit,
    loginUser
} from './controller/controller-firebase.js'


export const registerInOnSubmit = () => {
    const email = document.querySelector('[id="email-signup"]').value;
    const password = document.querySelector('[id="password-signup"]').value;
    registerUser(email, password)
        .then(() => {
            alert('Verifica tu correo e ingresa')
            // checkEmail();
        })
        .then(() => exit())
}

export const exitUser = () => {
    return exit()
}

export const loginInOnSubmit = () => {
    const email = document.querySelector('[id="email-login"]').value;
    const password = document.querySelector('[id="password-login"]').value;
    loginUser(email, password)
        .catch(() => {
            alert('Usuario invalido');
        });
}

export const showUser = () => {
    activeUser(changeRoute)
}

export const changeRoute = (route) => {
    location.hash = route;
}

export const saveName = () => {
    const nameToSave = document.querySelector('[id="name-signup"]').value;
    firestore().set({
        NameofUser: nameToSave
    })
}

export const getName = ()=>{
    firestore().get()
    .then((doc)=>{
        if(doc && doc.exists){
           console.log(doc.data().NameofUser);
        }
    })
}

export const deleteUser = (user) => {
    user.delete().then(() =>{
       alert('Usuario eliminad@')
      })
}