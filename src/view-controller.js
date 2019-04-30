import {
    registerUser, checkEmail, activeUser, exit
} from './lib/controller-firebase.js'
import { showActUser, screen1 } from './lib/Content.js';

export const registerInOnSubmit = () => {
    const email = document.querySelector('[id="email-signup"]').value;
    const password = document.querySelector('[id="password-signup"]').value;
    registerUser(email, password)
    .then(()=> {
        checkEmail();
    })
    .then(() => exit())
}

export const showUser = ()=>{
    activeUser(showActUser, screen1)
}

export const exitUser = () =>{
    return exit()
}