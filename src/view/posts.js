import {
  savePostdb,
  deletePost,
  updatePost,
  likePost,
  fileUserPost
  } from "../view-controller.js";
import {
  getUser,
  storage,
  // db
} from "../controller/controller-firebase.js";


export const createPostScreen = (posts) => {

  const divContainer = document.createElement('div');
  divContainer.innerHTML = '';
  const register =
    `<div class="container-post post post-border flex flex-column main-img auto">
        <select class="border-none inline-block select background-color-img" name="" id="visualización">
            <option value="modo">Visualización</option>    
            <option value="privado">Privado</option>
            <option value="publico">Público</option>
        </select>
        <input class="name-color post-input post-border" id="text-post" type="text" placeholder="¿Que quieres compartir?">
        <div class="container-post flex center">
            <input type="file" id="user-file" value="upload" class="upload-img delete-btn border-none inline-block">
            <button class="border-none inline-block delete-btn" id="publicar"><img class="delete-img container-post" src="img/paper-plane.png" alt=""></button>
        </div>
    </div>
    <section id="post-container">
   </section>`;
  divContainer.innerHTML = register;
  divContainer.classList.add('container2');
  const section = divContainer.querySelector('#post-container');
  posts.forEach(post => {
    section.appendChild(viewPostScreen(post))
  });
  const btnFile = divContainer.querySelector('#user-file');
  btnFile.addEventListener('change', (e) => {
    let file = e.target.files[0];
 console.log(file);
    fileUserPost(file);
  //  storage().ref('images/' + file.name).put(file);
  });
  const btnPublicar = divContainer.querySelector("#publicar");
  btnPublicar.addEventListener('click', () => {
    savePostdb(getUser());
  });
  return divContainer;
}

export const viewPostScreen = (objPosts) => {
  const divContainer = document.createElement('div');
  divContainer.innerHTML = '';
  const templatesPosts = `
    <div class="flex first-div-style">
      <p class="color-post publicado-name">Publicado por ${objPosts.name}</p>
      <button class="color-post exit-btn border-none" padding-ten id="deleteBtn"><img class="color-post delete-img" src="img/delete.png" alt="" data-post-id="${objPosts.id}"/></button>
    </div>
    <div>
      <p class="padding-ten">${objPosts.texto}</p>
    </div>
    <div class="padding-ten container-post">
      <span id="counterLike">${objPosts.likes}</span>
      <button class="border-none container-post delete-btn" id="likeBtn"><img class="color-post delete-img" src="img/like.png" alt="" data-post-id="${objPosts.id}"/></button>
      <button class="border-none container-post delete-btn" id="editBtn"><img class="color-post delete-img" src="img/edit.png" alt="pencil-editar" data-post-id="${objPosts.id}" data-post-text="${objPosts.texto}"/></button>
    </div>`;
  //console.log(objPosts, getUser());
  divContainer.innerHTML += templatesPosts;
  divContainer.classList.add('container2', 'published-post', 'post-border');
  const deleteBtn = divContainer.querySelector('#deleteBtn');
  deleteBtn.addEventListener('click', (evt) => {
    const user = getUser();
    if (objPosts.uid === user.uid) {
      let btnTarget = evt.target;
      let idTarget = btnTarget.getAttribute('data-post-id');
    deletePost(idTarget);
  }
})

const editBtn = divContainer.querySelector('#editBtn');
editBtn.addEventListener('click', (evt) => {
  const user = getUser();
  if (objPosts.uid === user.uid) {
    let btnTarget = evt.target;
    let idTarget = btnTarget.getAttribute('data-post-id');
    let textTarget = btnTarget.getAttribute('data-post-text');
    console.log(idTarget, textTarget);
    updatePost(idTarget, textTarget);
  }
})

const likeBtn = divContainer.querySelector('#likeBtn');
likeBtn.addEventListener('click', (evt) => {
    let btnTarget = evt.target;
    let idTarget = btnTarget.getAttribute('data-post-id');
    let counterLike = parseInt(divContainer.querySelector('#counterLike').innerHTML);
    let counter = counterLike+1;
    console.log(counter);
    divContainer.querySelector('#counterLike').innerHTML = counter;
    likePost(idTarget, counter);
  })
return divContainer;
}