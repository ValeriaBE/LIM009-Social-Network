// confg firebase mock 
const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
	// use null if your code does not use RTDB
	path => (path ? mockdatabase.child(path) : null),
	() => mockauth,
	() => mockfirestore
);

// fxs a testear
import {
    viewPostdb,
    deletePost,
    updatePost,
    savePostdb
} from '../src/view-controller.js'
