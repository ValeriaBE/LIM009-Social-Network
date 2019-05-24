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
	registerUser,
	loginUser,
	getUser,
	loginGoogle,
	loginFacebook,
	exit,
	activeUser
} from "../src/controller/controller-firebase.js";

describe('Registrar usuarios', () => {
	it('Deberia registrar un nuevo usuario', (done) => {
		registerUser('maga@wenergy.la', 'mg1234')
			.then((user) => {
				expect(user.email).toEqual('maga@wenergy.la')
				done();
			})
	})
});

describe('Login de Usuarios', () => {
	it('Deberia iniciar sesion', (done) => {
		loginUser('front@end.la', '123456')
			.then((user) => {
				expect(user.email).toEqual('front@end.la')
				done();
			})
	})
});

describe('Login de Usuarios con Google', () => {
	it('deberia ser una funcion', () => {
		expect(typeof loginGoogle).toBe('function');
	});
	it('Deberia poder iniciar sesion con Google', (done) => {
		loginGoogle()
		.then((user) => {
			expect(user.providerData[0].providerId).toBe('google.com')
			done()
		})
	})
});

describe('Login de Usuarios con Facebook', () => {
	it('debería ser una función', () => {
		expect(typeof loginFacebook).toBe('function');
	});
	it('Debería poder iniciar sesion con Facebook', (done) => {
		loginFacebook()
		.then((user) => {
			expect(user.providerData[0].providerId).toBe('facebook.com')
			done()
		})
	})
});

describe('Cerrar sesion de usuario', () => {
	it('Deberia ser una funcion', () => {
		expect(typeof (exit)).toBe('function');
	});
	it('Deberia poder cerrar sesion', (done) => {
		exit()
		.then((user) => {
			expect(user).toBe(undefined)
			done()
		})
	})
})

describe ('activeUser', ()=>{
	it('deberia de ver si el usuario esta activo', (done)=>{
		const callback = (user) =>{
			expect(user.email).toEqual('front@end.la')
			done()
		}
		activeUser(callback);
		loginUser('front@end.la', '123456');
	})
})

describe('getUser', () => {
	it('deberia retornar el correo del usuario que yo defina', (done) => {
		loginUser('front@end.la', '123456')
		.then(()=>{
			const user= getUser();
			expect(user.email).toEqual('front@end.la');
			done();
		})
	})
});


