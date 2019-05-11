import {
  savePostdb,
  deletePost,
  updatePost
} from "../view-controller.js";
import {
  getUser,
  // db
} from "../controller/controller-firebase.js";


export const postScreen = (posts) => {

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
            <button class="upload-img delete-btn border-none inline-block"><img class="delete-img" src="img/add-image.png" alt=""></button>
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
  const btnPublicar = divContainer.querySelector("#publicar");
  btnPublicar.addEventListener('click', () => {
    savePostdb(getUser());
  })
  return divContainer;
}

export const viewPostScreen = (objPosts) => {
  const divContainer = document.createElement('div');
  divContainer.innerHTML = '';
  const templatesPosts = `
    <div class="flex first-div-style">
      <p class="color-post publicado-name">Publicado por ${objPosts.name}</p>
      <button class="color-post exit-btn border-none padding-ten" id="deleteBtn" data-post-id="${objPosts.id}"><img class="color-post delete-img" src="img/delete.png" alt=""/></button>
    </div>
    <div>
      <p class="padding-ten">${objPosts.texto}</p>
    </div>
    <div class="padding-ten container-post">
      <button class="border-none container-post margin-right delete-btn" id="likeBtn" data-post-id="${objPosts.id}"><img class="color-post delete-img" src="img/like.png" alt=""/></button>
      <button class="border-none container-post delete-btn" id="editBtn" data-post-id="${objPosts.id}, ${objPosts.texto}"><img class="color-post delete-img" src="img/edit.png" alt=""/></button>
    </div>`;
  // console.log(objPosts);getUser()
  divContainer.innerHTML += templatesPosts;
  divContainer.classList.add('container2', 'published-post', 'post-border');
  const deleteBtn = divContainer.querySelector('#deleteBtn');
  deleteBtn.addEventListener('click', (evt) => {
    let btnTarget = evt.target;
    let idTarget = btnTarget.getAttribute('data-post-id');
    console.log(idTarget);
    deletePost(idTarget);
  })

  const editBtn = divContainer.querySelector('#editBtn');
  editBtn.addEventListener('click', (evt) => {
    let btnTarget = evt.target;
    let idTarget = btnTarget.getAttribute('data-post-id');
    console.log(idTarget);
    updatePost(idTarget);
  })
  return divContainer;
}
