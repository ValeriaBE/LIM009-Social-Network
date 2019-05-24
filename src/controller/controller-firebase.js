export const registerUser = (emailSignIn, passwordSignIn) => {
  return firebase.auth().createUserWithEmailAndPassword(emailSignIn, passwordSignIn)
};

export const loginUser = (emailLogIn, passwordLogIn) => {
  return firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn)
};

export const activeUser = (changeRoute) => {
  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      changeRoute('#/profile');
    } else {
      changeRoute('#/home');
    }
  });
};

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

export const unsuscribe = (showProfile) => {
  return firebase.auth().onAuthStateChanged((u2) => {
    if (u2) {
      showProfile(u2)
    }
  });
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

export const savePostdb = (getName, textPost, modoPost) => {
  const user = getUser();
  getName(user)
  .then((name) => {
		firebase.firestore().collection('posts').add({
			uid: user.uid,
			name: name,
			texto: textPost,
			state: modoPost,
			likes: 0,
		})
	})
};