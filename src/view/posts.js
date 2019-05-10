import { savePostdb } from "../view-controller.js";
import { getUser } from "../controller/controller-firebase.js";


export const postScreen = (posts, user) =>{

    const divContainer = document.createElement('div');
    divContainer.innerHTML='';
      const register =
    `<div class="container-post post post-border flex flex-column main-img auto">
        <select class="inline-block select background-color-img" name="" id="visualización">
            <option value="modo">Visualización</option>    
            <option value="privado">Privado</option>
            <option value="publico">Público</option>
        </select>
        <input class="name-color post-input post-border" id="text-post" type="text" placeholder="¿Que quieres compartir?">
        <div class="container-post flex center">
            <button class="upload-img inline-block"><img class="img-button background-color-img" src="img/add.png" alt=""></button>
            <button class="inline-block background-color-img compartir" id="publicar">Compartir</button>
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
    <div>
      <p>Publicado por ${objPosts.name}</p>
      <button>Delete</button>
    </div>
    <div>
      <p>${objPosts.texto}</p>
    </div>
    <div>
      <button>Like</button>
      <button>Share</button>
    </div>`;
  console.log(objPosts);
    divContainer.innerHTML += templatesPosts;
    divContainer.classList.add('container');
 
    return divContainer;
 }