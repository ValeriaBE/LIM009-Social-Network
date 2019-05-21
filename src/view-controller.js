import {
	registerUser,
	// checkEmail,
	activeUser,
	exit,
	loginUser,
	db,
	getUser,
	storage
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

export const showUser = () => {
	activeUser(changeRoute)
};

export const changeRoute = (route) => {
	location.hash = route;
};

// Save names users loggedOn with Google and Facebook
export const createUser = (cred) => {
	return db().collection('users').doc(cred.user.uid).set({
		name: cred.user.displayName
	})
};

export const deleteUser = (user) => {
	user.deleteuploaderFile().then(() => {
		alert('Usuario eliminad@')
	})
};

export const viewPostdb = (callback) => {
	db().collection("posts").onSnapshot((querySnapshot) => {
		const data = [];
		querySnapshot.forEach((doc) => {
			data.push({
				id: doc.id,
				...doc.data()
			});
		});
		callback(data);
	});
};

export const deletePost = (postId) => {
	return db().collection("posts").doc(postId).delete();
};

export const updatePost = (postId, postText) => {
	// document.querySelector('#text-post').value = postText;
	// document.querySelector('#visualización').value = modePost;
	// let boton = document.querySelector('#publicar');

	// // boton.addEventListener('click', () => {
	// 	// let postText = document.querySelector('#text-post').value;
	// 	// let modoPost = document.querySelector('#visualización').value;
console.log(postId);
		return db().collection("posts").doc(postId).update({
			texto: postText,
			// state: modePost,
		}).then((docRef) => {
			console.log('Document successfully update!')
			document.querySelector('#text-post').value = '';
			document.querySelector('#visualización').value = '';
		})
};

export const likePost = (postId, counter) => {

	return db().collection('posts').doc(postId).update({
		likes: counter,
	}).then(() => {
		console.log('Le diste like++')
	})
};

export const fileUserPost = (file) => {
	const storageRef = storage().ref('images/' + file);
	const uploadFile = storageRef.put(file);
	//const downloadURL = uploadFile.snapshot.ref.getDownloadURL();
	//return downloadURL;

	uploadFile.on('state_changed', (snapshot) => {
		/*var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  console.log('Upload is ' + progress + '% done');
  switch (snapshot.state) {
    case firebase.storage.TaskState.PAUSED: // or 'paused'
      console.log('Upload is paused');
      break;
    case firebase.storage.TaskState.RUNNING: // or 'running'
      console.log('Upload is running');
      break;
  }*/
	}, (error) => {
			console.log(error);
	}, () => {
		uploadFile.snapshot.ref.getDownloadURL()
			.then((downloadURL) => {

				//return downloadURL;
				console.log('File available at', downloadURL);
			});
	});
};

export const savePostdb = (user) => {
	let textPost = document.querySelector('#text-post').value;
	let modoPost = document.querySelector('#visualización').value;
	// let imgPost = fileUserPost(file);
	//	console.log(imgPost);
	//	console.log(user);
	getName(user).then((name) => {
		db().collection('posts').add({
				uid: getUser().uid,
				name: name,
				texto: textPost,
				state: modoPost,
				likes: 0,
				// imguser : imgPost,
			
			})
			.then((docRef) => {
				console.log("Document written with ID: ", docRef.id);
				textPost = '';
				modoPost = '';
			})
			.catch(function (error) {
				console.log("Error adding document: ", error);
			});
	})
};
