import { savePostdb } from "../view-controller.js";

export const postScreen = () =>{

    const divContainer = document.createElement('div');
    divContainer.innerHTML='';
      const register =
    `<div>
        <input id="text-post" type="text" placeholder="¿Que quieres compartir?">
        <button><img src="" alt=""></button>
        <select name="" id="visualización">
            <option value="">Visualización</option>
            <option value="privado">Privado</option>
            <option value="publico">Público</option>
        </select>
        <button id="publicar">Compartir</button>
    </div>`;
        divContainer.innerHTML = register;
        divContainer.classList.add('container');
  
        const publicar = divContainer.querySelector("#publicar");
        publicar.addEventListener('click', ()=>{
            savePostdb();
        })
    return divContainer;
  }