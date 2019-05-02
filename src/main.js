//Este es el punto de entrada de tu aplicacion
// import { screen1} from './view/login.js';
// import {activeUser} from './lib/controller-firebase.js'
import { showUser } from './view-controller.js';

import { initRouter } from './routes-controller.js';
// Initialize Firebase

window.addEventListener('load', ()=>{
    var config = {
        apiKey: "AIzaSyDPcLn-Y_IDzZB_cNjVFPMiZ3LP_AbLKGc",
        authDomain: "social-network-f8d4d.firebaseapp.com",
        databaseURL: "https://social-network-f8d4d.firebaseio.com",
        projectId: "social-network-f8d4d",
        storageBucket: "social-network-f8d4d.appspot.com",
        messagingSenderId: "815925731144"
    };
    firebase.initializeApp(config);
    showUser();
    initRouter();
});

// const init = () => {
//     window.addEventListener('hashchange',()=> console.log(window.location.hash))
// }