import {
  savePost,
} from "../view-controller.js";
import {
  getUser,
  deletePost,
  updatePost,
  likePost,
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
            <button class="border-none inline-block delete-btn" id="publicar"><img class="delete-img container-post" src="img/paper-plane.png" alt=""></button>
        </div>
        </div>
    <section id="post-container"></section>`;
  divContainer.innerHTML = register;
  divContainer.classList.add('container2');
  const section = divContainer.querySelector('#post-container');
  const user = getUser();
  posts.forEach(post => {
    if (post.state === 'publico' || post.uid === user.uid) {
      section.appendChild(viewPostScreen(post))
    }
  });

  const btnPublicar = divContainer.querySelector("#publicar");
  btnPublicar.addEventListener('click', () => {
    savePost();
  });
  return divContainer;
}

export const viewPostScreen = (objPosts) => {
  const user = getUser()
  const divContainer = document.createElement('div');
  divContainer.innerHTML = '';
  const templatesPosts = `
    <div class="flex first-div-style">
      <p class="color-post publicado-name">Publicado por ${objPosts.name}</p>
      ${objPosts.uid === user.uid ? `<button class="color-post exit-btn border-none" padding-ten id="deleteBtn"><img class="color-post delete-img" src="img/delete.png" alt="" data-post-id="${objPosts.id}"/></button>` : ''}
    </div>
    <div id="editText">
      <p class="padding-ten">${objPosts.texto}</p>
    </div>
    <div class="padding-ten container-post">
      <span id="counterLike">${objPosts.likes}</span>
      <button class="border-none container-post delete-btn" id="likeBtn"><img class="color-post delete-img" src="img/like.png" alt="" data-post-id="${objPosts.id}"/></button>
      ${objPosts.uid === user.uid ? `<button class="border-none container-post delete-btn" id="editBtn"><img class="color-post delete-img" src="img/edit.png" alt="pencil-editar" data-post-id="${objPosts.id}" data-post-text="${objPosts.texto}" data-post-mode ="${objPosts.state}"/></button>` : '' }
      <button class="border-none container-post delete-btn" id="commentBtn"><img class="color-post delete-img" src="img/chat.png" data-post-id="${objPosts.id}" alt="pencil-editar"/></button>
    </div>`;

  divContainer.innerHTML += templatesPosts;
  divContainer.classList.add('container2', 'published-post', 'post-border');
  const deleteBtn = divContainer.querySelector('#deleteBtn');

  if (deleteBtn) {
    deleteBtn.addEventListener('click', (evt) => {
      if (objPosts.uid === user.uid) {
        let btnTarget = evt.target;
        let idTarget = btnTarget.getAttribute('data-post-id');
        deletePost(idTarget);
      }
    })
  }

  const editBtn = divContainer.querySelector('#editBtn');
  if (editBtn) {
    editBtn.addEventListener('click', (evt) => {
      const user = getUser();
      if (objPosts.uid === user.uid) {
        const guardar = divContainer.querySelector('#editText');
        const newElement = document.createElement('textarea');
        const select = document.createElement('select');
        const option1 = document.createElement("option");
        const option2 = document.createElement("option");
        const submit = document.createElement('button');

        option1.setAttribute("value", "privado");
        const privateMode = document.createTextNode("Privado");
        option2.setAttribute("value", "publico");
        const publicMode = document.createTextNode("Publico");

        select.innerHTML = 'Visualización';
        submit.innerHTML = 'Submit';

        option1.appendChild(privateMode);
        select.appendChild(option1);
        option2.appendChild(publicMode);
        select.appendChild(option2);

        newElement.setAttribute('id', 'editArea');
        select.setAttribute('id', 'modo');
        submit.setAttribute('id', 'submitEdit');

        guardar.classList.add('editTextBox');
        newElement.classList.add('main-img', 'auto');
        submit.classList.add('margin-top', 'auto', 'buttons', 'block', 'color2', 'text-color');
        submit.classList.add('margin-top', 'auto', 'bottom');

        let btnTarget = evt.target;
        let idTarget = btnTarget.getAttribute('data-post-id');
        let textTarget = btnTarget.getAttribute('data-post-text');
        let modoTarget = btnTarget.getAttribute('data-post-mode');

        newElement.innerHTML = textTarget;
        guardar.appendChild(newElement);
        guardar.appendChild(submit);
        guardar.appendChild(select);

        submit.addEventListener('click', () => {
          textTarget = guardar.querySelector('#editArea').value;
          modoTarget = guardar.querySelector('#modo').value;
          updatePost(idTarget, textTarget, modoTarget);
        })
      }
    })
  }

  const likeBtn = divContainer.querySelector('#likeBtn');
  likeBtn.addEventListener('click', (evt) => {
    let btnTarget = evt.target;
    let idTarget = btnTarget.getAttribute('data-post-id');
    let counterLike = parseInt(divContainer.querySelector('#counterLike').innerHTML);
    let counter = counterLike + 1;
    divContainer.querySelector('#counterLike').innerHTML = counter;
    likePost(idTarget, counter);
  })
  return divContainer;
}