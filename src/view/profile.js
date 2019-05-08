import{
    exitUser, deleteUser, getName
} from '../view-controller.js'
import { getUser } from '../controller/controller-firebase.js';

export const showActUser = (user) => {
    console.log(user);
    const divContainer = document.createElement('div');
    divContainer.innerHTML='';
    const userCheck = user;
    let string = `
    <header class="header-profile center flex text-color">
        <div class="dropdown text-color">
            <img class="figure-profile text-color" src="img/menu.png" alt="">
            <div class="dropdown-content position">
            <a class="dropdown-links block" href="#/home" id="exit">Cerrar Sesión</a>
            <a class="dropdown-links block" href="#/home" id="delete">Borrar Perfil</a>
            </div>
        </div>
        <section class="position">
            <p class="header-items text-color inline-block">- Wenergy -</p>
        </section>
    </header>
    <section class="section-user center flex">
        <figure class="figure-profile inline-block">
            <img class="img-user"src="${userCheck.photoURL}" alt="foto">
        </figure>
        <div class="name-user text-color inline-block">
            <p id="userName">${userCheck.displayName || userCheck.name}</p>
            <p>${userCheck.email}<p>
        </div>
    </section>
      `;
      divContainer.innerHTML = string;
      divContainer.classList.add('container2');
  
    const buttonLogOut = divContainer.querySelector('#exit');
    buttonLogOut.addEventListener('click', () => {
      exitUser();
    });
    const buttonLDelete = divContainer.querySelector('#delete');
    buttonLDelete.addEventListener('click', () => {
      deleteUser(getUser());
    });
    return divContainer;
  }
  