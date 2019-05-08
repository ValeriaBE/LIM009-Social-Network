import {
    registerUser,
    // checkEmail,
    activeUser,
    exit,
    loginUser,
    firestore
} from './controller/controller-firebase.js'


export const registerInOnSubmit = () => {
    const nameToSave = document.querySelector('[id="name-signup"]').value;
    const email = document.querySelector('[id="email-signup"]').value;
    const password = document.querySelector('[id="password-signup"]').value;
    registerUser(email, password)
        .then((cred) => {
            return firestore().collection('users').doc(cred.user.uid).set({
                name: nameToSave
            })
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

export const getName = (user) => {
    if(user){
        if (user.providerData[0].providerId!='password') {
            return {
                then: (cb) => {
                    cb(user.displayName)
                }
            }
        } else {
            return firestore().collection('users').doc(user.uid).get()
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