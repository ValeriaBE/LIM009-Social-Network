import{
registerInOnSubmit
} from '../view-controller.js'

export const registerScreen = () =>{

  const divContainer = document.createElement('div');
  divContainer.innerHTML='';
    const register =
      `<form id="add-profile">
        <input type="text" name="name" id="name-signup" placeholder="Nombre">
        <input type="email" name="correo" id="email-signup" placeholder="Email">
        <input type="password" name="contraseña" id="password-signup" placeholder="Password">
        <div id="signup-btns">
          <a id="send" >Sign up</a>
        </div>
      </form> `;
      divContainer.innerHTML = register;

  const buttonRegisterEmail = divContainer.querySelector('#send');
  buttonRegisterEmail.addEventListener('click', () => {
    registerInOnSubmit();
  });
  return divContainer;
}