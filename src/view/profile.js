import{
    exitUser
} from '../view-controller.js'

export const showActUser = (user) => {
    const content = document.getElementById('root');
    const userCheck = user;
    let string = `
          <p>Bienvenido!${userCheck.displayName}</p>
          <figure><img src="${userCheck.photoURL}" alt="FOTOLOCA"></figure>
      <p> Email: ${userCheck.email}<p>
      <a href="#/" id="exit">Cerrar sesión</a>
      `;
    content.innerHTML = string;
  
    const buttonLogOut = document.getElementById('exit');
    buttonLogOut.addEventListener('click', () => {
      exitUser();
    });
  }