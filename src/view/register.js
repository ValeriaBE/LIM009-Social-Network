import{
registerInOnSubmit
} from '../view-controller.js'

export const registerScreen = () =>{
  const login = document.getElementById('login')
    login.innerHTML = '';
    const register =
      `<form id="add-profile">
        <input type="text" name="name" id="name-signup" class="inputs" placeholder="Nombre">
        <input type="email" name="correo" id="email-signup" class="inputs" placeholder="Email">
        <input type="password" name="contraseña" id="password-signup" class="inputs" placeholder="Password">
        <div id="signup-btns">
          <a href="#/" id="send" class="login">Sign up</a>
        </div>
      </form> `;
    const div = document.createElement('div')
    div.innerHTML = register;
    login.appendChild(div);

  const buttonRegisterEmail = document.getElementById('send');
  buttonRegisterEmail.addEventListener('click', (event) => {
    event.preventDefault();
    registerInOnSubmit();
  });
  return divElemt;
}