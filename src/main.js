
import { initRouter } from './routes-controller.js';
import { showUser } from './view-controller.js';
// Initialize Firebase

window.addEventListener('load', () => {
    var config = {
        apiKey: "AIzaSyDevzwoVL7NBcwOPLozUNlAINXFjxhJmRg",
        authDomain: "wenergy-4522a.firebaseapp.com",
        databaseURL: "https://wenergy-4522a.firebaseio.com",
        projectId: "wenergy-4522a",
        storageBucket: "wenergy-4522a.appspot.com",
        messagingSenderId: "999927443474",
        appId: "1:999927443474:web:7204b253b9f1c03e"
    };
    firebase.initializeApp(config);
    initRouter();
    // showUser();
});
