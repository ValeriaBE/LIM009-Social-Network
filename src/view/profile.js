import{
  exitUser,
  changeRoute
} from '../view-controller.js'

import { createPostScreen } from './posts.js';

export const showActUser = (user, posts) => {
  console.log(user)
  const divContainer = document.createElement('div');
  divContainer.innerHTML='';
  const userCheck = user;
  let string = `
    <header class="header-profile back-color center flex text-color">
        <div class="dropdown border-none text-color back-color">
            <img class="menu-button back-color" src="img/menu.png" alt="">
            <div class="dropdown-content position">
            <a class="dropdown-links text-color block" href="#/home" id="exit">Cerrar Sesión</a>
            </div>
        </div>
        <div class="position">
            <p class="header-items back-color text-color inline-block">- Wenergy -</p>
        </div>
    </header>
    <section class="margin big-profile center container">
      <div class="inline-flex post-border padding-ten">
          <figure class="photo-box inline-block">
              <img class="img-user"src="${userCheck.photoURL == null ? 'img/No-Photo-Available.jpg': userCheck.photoURL}" alt="foto">
          </figure>
          <div class="name-user name-color inline-block">
              <p id="userName">${userCheck.displayName || userCheck.name}</p>
              <p>${userCheck.email}<p>
          </div>
      </div>
      <div id='box-of-posts' class="delete-img margin"></div>
    </section>`;

    divContainer.innerHTML = string;
    divContainer.classList.add('container2');
    const boxOfPosts = divContainer.querySelector('#box-of-posts');
    boxOfPosts.appendChild(createPostScreen(posts));
    
    const buttonLogOut = divContainer.querySelector('#exit');
    buttonLogOut.addEventListener('click', () => {
      exitUser().then(()=> changeRoute("#/home"));
    });
    return divContainer;
  }
  
