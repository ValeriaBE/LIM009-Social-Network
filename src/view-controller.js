import {
    registerUser,
    // checkEmail,
    activeUser,
    exit,
    loginUser,
    db
} from './controller/controller-firebase.js'


export const registerInOnSubmit = () => {
    const nameToSave = document.querySelector('[id="name-signup"]').value;
    const email = document.querySelector('[id="email-signup"]').value;
    const password = document.querySelector('[id="password-signup"]').value;
    registerUser(email, password)
        .then((cred) => {
            return db().collection('users').doc(cred.user.uid).set({
                name: nameToSave
            })
        })
        .then(() => exit())
        .then(()=> changeRoute("#/home"))
}

export const savePostdb = () =>{
    const textPost = document.querySelector('#text-post').value;
    const modoPost = document.querySelector('#visualización').value;
    db().collection('posts').add({
        texto: textPost,
        modo: modoPost
    })
     .then((docRef)=> {
        console.log("Document written with ID: ", docRef.id);
     })
     .catch(function(error) {
        console.error("Error adding document: ", error);
     });
}

export const exitUser = () => {
    return exit()
}

export const loginInOnSubmit = () => {
    const email = document.querySelector('[id="email-login"]').value;
    const password = document.querySelector('[id="password-login"]').value;
    loginUser(email, password)
    .then(()=> changeRoute("#/profile"))
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

export const getName = (user) => {
    if(user){
        if (user.providerData[0].providerId!='password') {
            return {
                then: (cb) => {
                    cb(user.displayName)
                }
            }
        } else {
            return db().collection('users').doc(user.uid).get()
                .then((doc) => {
                    return doc.data().name;
                })
        
            }
    }
}

export const deleteUser = (user) => {
    user.delete().then(() => {
        alert('Usuario eliminad@')
    })
}