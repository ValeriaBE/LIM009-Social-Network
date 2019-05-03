import{
registerInOnSubmit
} from '../view-controller.js'

export const registerScreen = () =>{

  const divContainer = document.createElement('div');
  divContainer.innerHTML='';
    const register =
      `<form id="add-profile">
        <input type="text" name="name" id="name-signup" class="inputs" placeholder="Nombre">
        <input type="email" name="correo" id="email-signup" class="inputs" placeholder="Email">
        <input type="password" name="contraseña" id="password-signup" class="inputs" placeholder="Password">
        <div id="signup-btns">
          <a id="send" class="login">Sign up</a>
        </div>
      </form> `;
      divContainer.innerHTML = register;

  const buttonRegisterEmail = divContainer.querySelector('#send');
  buttonRegisterEmail.addEventListener('click', () => {
    registerInOnSubmit();
  });
  return divContainer;
}