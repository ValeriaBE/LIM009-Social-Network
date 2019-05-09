import { savePostdb } from "../view-controller.js";


export const postScreen = () =>{

    const divContainer = document.createElement('div');
    divContainer.innerHTML='';
      const register =
    `<div class="post post-border flex flex-column main-img auto">
        <select class="inline-block" name="" id="visualización">
            <option value="modo">Visualización</option>    
            <option value="privado">Privado</option>
            <option value="publico">Público</option>
        </select>
        <input class="post-input post-border" id="text-post" type="text" placeholder="¿Que quieres compartir?">
        <div class="flex center">
            <button class="upload-img inline-block"><img class="img-button" src="img/add.png" alt=""></button>
            <button class="inline-block" id="publicar">Compartir</button>
        </div>
    </div>`;
        divContainer.innerHTML = register;
        divContainer.classList.add('container');
        const publicar = divContainer.querySelector('#publicar');
        publicar.addEventListener('click', ()=>{
            savePostdb();
        })
    return divContainer;
  }