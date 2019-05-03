import{
    exitUser
} from '../view-controller.js'

export const showActUser = (user) => {
    const divContainer = document.createElement('div');
    divContainer.innerHTML='';
    const userCheck = user;
    let string = `
          <p>Bienvenido!${userCheck.displayName}</p>
          <figure><img src="${userCheck.photoURL}" alt="FOTOLOCA"></figure>
      <p> Email: ${userCheck.email}<p>
      <a href="#/home" id="exit">Cerrar sesión</a>
      `;
      divContainer.innerHTML = string;
  
    const buttonLogOut = divContainer.querySelector('#exit');
    buttonLogOut.addEventListener('click', () => {
      exitUser();
    });
    return divContainer;
  }