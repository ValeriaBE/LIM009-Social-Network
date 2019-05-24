import {
	registerUser,
	exit,
	loginUser,
	db,
	savePostdb,
	getUser,

} from './controller/controller-firebase.js';


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
		.then(() => changeRoute("#/home"))
};

export const loginInOnSubmit = () => {
	const email = document.querySelector('[id="email-login"]').value;
	const password = document.querySelector('[id="password-login"]').value;
	loginUser(email, password)
		.then(() => changeRoute("#/profile"))
		.catch(() => {
			alert('Usuario invalido');
		});
};

export const getName = (user) => {
	if (user) {
		if (user.providerData[0].providerId != 'password') {
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
};

export const exitUser = () => {
	return exit()
};

export const changeRoute = (route) => {
	location.hash = route;
};

export const savePost = () => {
	let textPost = document.querySelector('#text-post').value;
	let modoPost = document.querySelector('#visualización').value;
	const user = getUser();
	getName(user)
	.then((name) => {
	savePostdb(user.uid, name, textPost, modoPost);
	})
}