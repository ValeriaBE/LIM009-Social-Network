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
	checkEmail,
	loginUser,
	activeUser,
	getUser,
	loginGoogle,
	loginFacebook,
	exit
} from "../src/controller/controller-firebase.js";

describe('Registrar usuarios', () => {
	it('registerUser deberia ser una funcion', () => {
		expect(typeof (registerUser)).toBe('function')
	});
	it('Deberia regitrar un nuevo usuario', () => {
		return registerUser('maga@wenergy.la', 'mg1234')
			.then((user) => {
				expect(user.email).toEqual('maga@wenergy.la')
			})
	})
});

// describe('Enviar Email de verificacion', () => {
// 	it('checkEmail deberia ser una funcion', () => {
// 		expect(typeof (checkEmail)).toBe('function')
// 	})
// });

describe('Login de Usuarios', () => {
	it('loginUser deberia ser una funcion', () => {
		expect(typeof (loginUser)).toBe('function')
	});
	it('Deberia iniciar sesion', () => {
		return loginUser('front@end.la', '123456')
			.then((user) => {
				expect(user.email).toEqual('front@end.la')
			})
	})
});

describe('Observador de estado de usuario', () => {
	it('activeUser deberia ser una funcion', () => {
		expect(typeof (activeUser)).toBe('function')
	});
	it('deberia hacer cambio de ruta si hay un user activo', () => {
		activeUser((user) => {
			expect(user).toEqual('#/profile')
		})
	})
});

describe('Login de Usuarios con Google', () => {
	it('deberia ser una funcion', () => {
		expect(typeof loginGoogle).toBe('function');
	});
	it('Deberia poder iniciar sesion con Google', () => {
		firebase.auth().onAuthStateChanged((user) => {
			expect(user.isAnonymous).toBe(false)
		})
		return loginGoogle();
	})
});

describe('Login de Usuarios con Facebook', () => {
	it('debería ser una función', () => {
		expect(typeof loginFacebook).toBe('function');
	});
	it('Debería poder iniciar sesion con Facebook', () => {
		firebase.auth().onAuthStateChanged((user) => {
			expect(user.isAnonymous).toBe(false)
		})
		return loginFacebook();
	})
});

describe('Obtener usuario getUser', () => {
	it('Deberia ser una funcion', () => {
		expect(typeof (getUser)).toBe('function');
	});
	it('Deberia retornar usuario activo', () => {
		getUser((user) => {
			expect(user.isAnonymous).toBe('false')
		})
	});
});

describe('Cerrar sesion de usuario', () => {
	it('Deberia ser una funcion', () => {
		expect(typeof (exit)).toBe('function');
	});
	it('Deberia poder cerrar sesion', () => {
		return exit();
	})
})