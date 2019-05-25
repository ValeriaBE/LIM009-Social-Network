export const registerUser = (emailSignIn, passwordSignIn) => {
  return firebase.auth().createUserWithEmailAndPassword(emailSignIn, passwordSignIn)
};

export const loginUser = (emailLogIn, passwordLogIn) => {
  return firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn)
};

export const db = ()=>{
  return firebase.firestore();
}

export const getUser = () => {
  return firebase.auth().currentUser;
}

export const loginGoogle = () => {
	const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
};

export const loginFacebook = () => {
  var provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider)
};

export const activeUser = (u2) => {
  return firebase.auth().onAuthStateChanged((u2));
}

export const exit = () => {
  return firebase.auth().signOut()
};

// Save names users loggedOn with Google and Facebook
export const createUser = (cred) => {
	return firebase.firestore().collection('users').doc(cred.user.uid).set({
		name: cred.user.displayName
	})
}

export const viewPostdb = (callback) => {
	firebase.firestore().collection("posts").onSnapshot((querySnapshot) => {
		const data = [];
		querySnapshot.forEach((doc) => {
			data.push({
				id: doc.id,
				...doc.data()
			});
		});
		callback(data);
	});
}

export const deletePost = (postId) => {
	return firebase.firestore().collection("posts").doc(postId).delete();
}

export const updatePost = (postId, postText, modePost) => {
	return firebase.firestore().collection("posts").doc(postId).update({
		texto: postText,
		state: modePost,
	})
};

export const likePost = (postId, counter) => {
	return firebase.firestore().collection('posts').doc(postId).update({
		likes: counter,
	})
};

export const savePostdb = (uid, name, textPost, modoPost) => {
		return firebase.firestore().collection('posts').add({
			uid: uid,
			name: name,
			texto: textPost,
			state: modoPost,
			likes: 0
		})
};