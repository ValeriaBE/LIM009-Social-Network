//Este es el punto de entrada de tu aplicacion
import { screen1} from './lib/Content.js';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDPcLn-Y_IDzZB_cNjVFPMiZ3LP_AbLKGc",
    authDomain: "social-network-f8d4d.firebaseapp.com",
    databaseURL: "https://social-network-f8d4d.firebaseio.com",
    projectId: "social-network-f8d4d",
    storageBucket: "social-network-f8d4d.appspot.com",
    messagingSenderId: "815925731144"
};
firebase.initializeApp(config);

window.onload = screen1();