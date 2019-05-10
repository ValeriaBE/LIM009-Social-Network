import { savePostdb } from "../view-controller.js";
import { getUser, deletePost } from "../controller/controller-firebase.js";


export const postScreen = (posts) =>{

    const divContainer = document.createElement('div');
    divContainer.innerHTML='';
      const register =
    `<div class="container-post post post-border flex flex-column main-img auto">
        <select class="border-none inline-block select background-color-img" name="" id="visualización">
            <option value="modo">Visualización</option>    
            <option value="privado">Privado</option>
            <option value="publico">Público</option>
        </select>
        <input class="name-color post-input post-border" id="text-post" type="text" placeholder="¿Que quieres compartir?">
        <div class="container-post flex center">
            <button class="upload-img border-none inline-block"><img class="img-button background-color-img" src="img/add.png" alt=""></button>
            <button class="border-none inline-block background-color-img compartir" id="publicar">Compartir</button>
        </div>
    </div>
    <section id="post-container">
   </section>`;
   divContainer.innerHTML = register;
   divContainer.classList.add('container');
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
      <button class="color-post delete-btn border-none padding-ten" id="deleteBtn"><img class="color-post delete-img" src="img/delete.png" alt=""/></button>
    </div>
    <div>
      <p class="padding-ten">${objPosts.texto}</p>
    </div>
    <div class="padding-ten container-post">
      <button class="border-none container-post delete-btn"><img class="color-post delete-img" src="img/like.png" alt=""/></button>
      <button class="border-none container-post delete-btn"><img class="color-post delete-img" src="img/edit.png" alt=""/></button>
    </div>`;
  console.log(objPosts);
    divContainer.innerHTML += templatesPosts;
    divContainer.classList.add('container', 'published-post', 'post-border');
    const deleteBtn = divContainer.querySelector('#deleteBtn');
    deleteBtn.addEventListener('click',()=>{
      deletePost(getUser());
    })
    return divContainer;
 }