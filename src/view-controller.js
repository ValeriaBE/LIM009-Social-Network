import {
	registerUser,
	// checkEmail,
	activeUser,
	exit,
	loginUser,
	db,
	getUser
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
		.then(() => changeRoute("#/home"))
}

export const loginInOnSubmit = () => {
	const email = document.querySelector('[id="email-login"]').value;
	const password = document.querySelector('[id="password-login"]').value;
	loginUser(email, password)
		.then(() => changeRoute("#/profile"))
		.catch(() => {
			alert('Usuario invalido');
		});
}

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
}

export const deleteUser = (user) => {
	user.delete().then(() => {
		alert('Usuario eliminad@')
	})
}

export const exitUser = () => {
	return exit()
}


export const showUser = () => {
	activeUser(changeRoute)
}

export const changeRoute = (route) => {
	location.hash = route;
}

// Save names users loggedOn with Google and Facebook
export const createUser = (cred) => {
	return db().collection('users').doc(cred.user.uid).set({
		name: cred.user.displayName
	})
}


export const savePostdb = (user) => {
	let textPost = document.querySelector('#text-post').value;
	let modoPost = document.querySelector('#visualización').value;
	console.log(user);
	getName(user).then((name) => {
		db().collection('posts').add({
				uid: getUser().uid,
				name: name,
				texto: textPost,
				modo: modoPost
			})
			.then((docRef) => {
				console.log("Document written with ID: ", docRef.id);
				textPost = '';
				modoPost = '';
			})
			.catch(function (error) {
				console.error("Error adding document: ", error);
			});
	})
}

export const viewPostdb = (callback) => {
	db().collection("posts").onSnapshot((querySnapshot) => {
		const data = [];
		querySnapshot.forEach((doc) => {
			data.push({
				id: doc.id,
				...doc.data()
			});
			console.log(data);
		});
		callback(data);
	});
}

export const deletePost = (postId) => {
	return db().collection("posts").doc(postId).delete();
}

export const updatePost = (postId, postText) => {
	 document.querySelector('#text-post').value = postText;
	//  document.querySelector('#visualización').value = modoPost;
	 let boton = document.querySelector('#publicar');

	let collectionPosts = db().collection("posts").doc(postId);
	
	collectionPosts.update({
		texto: postText,
	})
}